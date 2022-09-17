import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfig } from '@backend/modules/config/models/app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(appConfig: AppConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: appConfig.jwtSecret,
    });
  }

  async validate(payload: {
    sub: number;
    username: string;
  }): Promise<{ userId: number; username: string }> {
    if (!payload) throw new UnauthorizedException();

    return { userId: payload.sub, username: payload.username };
  }
}
