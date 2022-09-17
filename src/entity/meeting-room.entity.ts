import { IntTimestamp } from '@backend/entity/int-timestamp.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { MeetRoom } from '@backend/enums/meet-room.enum';
import { RoomBooking } from '@backend/entity/room-booking.entity';

@Entity('meeting_room')
export class MeetingRoom extends IntTimestamp {
  @Column({ name: 'room_name', type: 'varchar', length: 300 })
  roomName: MeetRoom;

  @OneToMany(() => RoomBooking, ({ meetingRoom }) => meetingRoom)
  bookingTime: RoomBooking[];
}
