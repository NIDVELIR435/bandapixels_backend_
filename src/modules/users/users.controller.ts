import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from '@backend/modules/users/services/users.service';
import { SignUpBodyDto } from '@backend/modules/users/dto/sign-up-body.dto';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  @ApiOperation({
    summary: 'should return create new user',
  })
  signUp(@Body() body: SignUpBodyDto) {
    return this.usersService.signUp(body);
  }
}
