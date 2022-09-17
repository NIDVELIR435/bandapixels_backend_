import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { MeetRoom } from '@backend/enums/meet-room.enum';

export class BookedTimeParamDto {
  @ApiProperty({ enum: MeetRoom })
  @IsEnum(MeetRoom)
  roomName: MeetRoom;

  @ApiProperty({
    type: Date,
  })
  @Type(() => Date)
  @IsDate()
  timeFrom: Date;

  @ApiProperty({
    type: Date,
  })
  @Type(() => Date)
  @IsDate()
  timeTo: Date;
}
