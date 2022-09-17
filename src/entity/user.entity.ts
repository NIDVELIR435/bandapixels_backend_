import { Column, Entity, OneToMany } from 'typeorm';
import { IntTimestamp } from '@backend/entity/int-timestamp.entity';
import { RoomBooking } from '@backend/entity/room-booking.entity';

@Entity({ name: 'user' })
export class User extends IntTimestamp {
  @Column({ name: 'mail', type: 'varchar', length: 500 })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 1000 })
  password: string;

  @OneToMany(() => RoomBooking, ({ user }) => user)
  bookingTime: RoomBooking[];
}
