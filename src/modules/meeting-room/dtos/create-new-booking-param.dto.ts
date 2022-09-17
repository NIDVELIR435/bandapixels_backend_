import { BookedTimeParamDto } from '@backend/modules/meeting-room/dtos/booked-time-param.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateNewBookingParamDto extends BookedTimeParamDto {
  @ApiProperty({ type: Number })
  @IsInt()
  userId: number;
}
