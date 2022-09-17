import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class IdParamDto {
  @ApiProperty({ type: Number })
  @Type(() => Number)
  @IsInt()
  id: number;
}
