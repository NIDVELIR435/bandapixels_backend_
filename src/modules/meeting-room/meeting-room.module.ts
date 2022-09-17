import { Module } from '@nestjs/common';
import { MeetingRoomService } from '@backend/modules/meeting-room/services/meeting-room.service';
import { MeetingRoomController } from '@backend/modules/meeting-room/meeting-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingRoom, RoomBooking } from '@backend/entity';
import { UsersModule } from '@backend/modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([RoomBooking, MeetingRoom]),
  ],
  providers: [MeetingRoomService],
  controllers: [MeetingRoomController],
})
export class MeetingRoomModule {}
