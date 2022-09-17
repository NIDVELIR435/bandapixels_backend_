import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookedTimeParamDto } from '@backend/modules/meeting-room/dtos/booked-time-param.dto';
import { MeetingRoomService } from '@backend/modules/meeting-room/services/meeting-room.service';
import { CreateNewBookingParamDto } from '@backend/modules/meeting-room/dtos/create-new-booking-param.dto';
import { IdParamDto } from '@backend/modules/meeting-room/dtos/id-param.dto';
import { JwtAuth } from '@backend/modules/auth/decorators/jwt-auth.decorator';

@ApiTags('meeting room')
@Controller('meeting-room')
export class MeetingRoomController {
  constructor(
    private readonly meetingRoomService: MeetingRoomService
  ) {}

  @JwtAuth()
  @ApiOperation({
    summary:
      'should return return all existing booked time for particular room',
  })
  @Get('booked-time')
  findBookedTime(@Query() param: BookedTimeParamDto) {
    return this.meetingRoomService.findBookedTime(param);
  }

  @JwtAuth()
  @ApiOperation({
    summary: 'create',
  })
  @Post('booking/create')
  createNewBooking(@Body() body: CreateNewBookingParamDto) {
    return this.meetingRoomService.createNewBooking(body);
  }

  @JwtAuth()
  @ApiOperation({
    summary: 'remove particular',
  })
  @Delete('booking/:id/remove')
  deleteBooked(@Body() body: IdParamDto) {
    return this.meetingRoomService.deleteBooked(body);
  }
}
