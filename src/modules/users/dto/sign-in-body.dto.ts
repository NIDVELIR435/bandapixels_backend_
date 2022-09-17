import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SignInBodyDto {
  @ApiProperty({ type: String })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  password: string;
}
