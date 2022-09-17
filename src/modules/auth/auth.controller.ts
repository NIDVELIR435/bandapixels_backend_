import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from '@backend/modules/auth/services/auth.service';
import { LocalAuth } from '@backend/modules/auth/decorators/basic-auth.decorator';
import { User } from '@backend/entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@backend/modules/auth/decorators/jwt-auth.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @LocalAuth()
  @ApiOperation({
    summary: 'should return token new token',
  })
  @Post('login')
  async login(@Req() req: Request & { user: User }) {
    return this.authService.login(req.user);
  }

  @JwtAuth()
  @ApiOperation({
    summary: 'allow check token. Should return username',
  })
  @Get('token-check')
  getProfile(@Req() req: Request & { user: User }) {
    return req.user;
  }
}
