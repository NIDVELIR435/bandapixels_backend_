import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeetingRoom, RoomBooking } from '@backend/entity';
import { Repository } from 'typeorm';
import { BookedTimeParamDto } from '@backend/modules/meeting-room/dtos/booked-time-param.dto';
import { CreateNewBookingParamDto } from '@backend/modules/meeting-room/dtos/create-new-booking-param.dto';
import { isNil, isEmpty } from 'lodash';
import { DateTime } from 'luxon';
import { UsersService } from '@backend/modules/users/services/users.service';
import { IdParamDto } from '@backend/modules/meeting-room/dtos/id-param.dto';

@Injectable()
export class MeetingRoomService {
  constructor(
    @InjectRepository(RoomBooking)
    private roomBookingRepository: Repository<RoomBooking>,
    @InjectRepository(MeetingRoom)
    private meetingRoomRepository: Repository<MeetingRoom>,
    private usersService: UsersService
  ) {}

  public async findBookedTime({
    timeTo,
    timeFrom,
    roomName,
  }: BookedTimeParamDto): Promise<RoomBooking[]> {
    return this.roomBookingRepository
      .createQueryBuilder('roomBooking')
      .leftJoin('roomBooking.meetingRoom', 'meetingRoom')
      .leftJoinAndSelect('roomBooking.user', 'user')
      .where('meetingRoom.roomName = :roomName', { roomName })
      .andWhere('roomBooking.bookedTimeFrom >= :timeFrom', {
        timeFrom,
      })
      .andWhere('roomBooking.bookedTimeTo <= :timeTo', { timeTo })
      .getMany();
  }

  public async createNewBooking({
    userId,
    ...rest
  }: CreateNewBookingParamDto): Promise<RoomBooking> {
    const alreadyBooked = await this.findBookedTime({
      ...rest,
    });

    if (!isNil(alreadyBooked) && !isEmpty(alreadyBooked))
      throw new ForbiddenException(
        `In time between [${this.changeDateForUi(
          rest.timeFrom
        )}] and [${this.changeDateForUi(
          rest.timeTo
        )}] already booked room [${
          rest.roomName
        }] for users [${alreadyBooked
          .map(({ user }) => user.id)
          .join(', ')}]`
      );

    const user = await this.usersService.findUserById({ id: userId });
    if (isNil(user))
      throw new NotFoundException(
        `cannot find user where id [${userId}]`
      );

    const { roomName, timeFrom, timeTo } = rest;

    const meetingRoom =
      (await this.meetingRoomRepository.findOne({
        where: { roomName },
      })) ??
      (await this.meetingRoomRepository
        .save({ roomName }) //todo should be inside migration
        .then(() =>
          this.meetingRoomRepository.findOne({ where: { roomName } })
        ));

    const conditions = {
      bookedTimeTo: timeTo,
      bookedTimeFrom: timeFrom,
      user,
    };
    return this.roomBookingRepository
      .save({
        meetingRoom,
        ...conditions,
      })
      .then(
        () =>
          this.roomBookingRepository.findOne({
            where: conditions,
          }) as unknown as RoomBooking
      );
  }

  public async deleteBooked({
    id,
  }: IdParamDto): Promise<{ success: boolean }> {
    const alreadyBooked = await this.roomBookingRepository.findOne(
      id
    );

    if (isNil(alreadyBooked) && isEmpty(alreadyBooked))
      throw new NotFoundException(
        `cannot find record where id: [${id}]`
      );

    await this.roomBookingRepository.remove(alreadyBooked!);
    return { success: true };
  }

  private changeDateForUi(date: Date): string {
    return DateTime.fromJSDate(date).toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS
    );
  }

  // private campareTimeDuration(timeFrom: Date, timeTo: Date): boolean {
  //   const luxonTimeFrom = DateTime.fromJSDate(timeFrom);
  //   const luxonTimeTo = DateTime.fromJSDate(timeTo);
  //   const diff = luxonTimeFrom
  //     .diff(luxonTimeTo, ['minutes'])
  //     .toObject();
  //
  //   return diff === 30 || diff === 60;
  // }
}
