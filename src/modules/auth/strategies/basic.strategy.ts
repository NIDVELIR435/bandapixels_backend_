import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '@backend/modules/auth/services/auth.service';
import { User } from '@backend/entity';
import { isNil } from 'lodash';
import { BasicStrategy as Strategy } from 'passport-http';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async validate(
    _req: Request,
    email: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.authService.validateUser(email, password);

    if (isNil(user)) throw new UnauthorizedException();

    return user;
  }
}
