import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IntTimestamp } from '@backend/entity/int-timestamp.entity';
import { MeetingRoom } from '@backend/entity/meeting-room.entity';
import { User } from '@backend/entity/user.entity';

@Entity('room_booking')
export class RoomBooking extends IntTimestamp {
  @Column({ name: 'booked_time_from', type: 'timestamp' })
  bookedTimeFrom: Date;

  @Column({ name: 'booked_time_to', type: 'timestamp' })
  bookedTimeTo: Date;

  @ManyToOne(() => MeetingRoom, ({ bookingTime }) => bookingTime)
  @JoinColumn({ name: 'meeting_room_id', referencedColumnName: 'id' })
  meetingRoom: MeetingRoom;

  @ManyToOne(() => User, ({ bookingTime }) => bookingTime)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
