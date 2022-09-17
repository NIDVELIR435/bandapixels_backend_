import { Injectable } from '@nestjs/common';
import { UsersService } from '@backend/modules/users/services/users.service';
import { isEqual, isNil } from 'lodash';
import { User } from '@backend/entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findUserByEmail({
      email: username,
    });

    if (!isNil(user) && isEqual(user.password, password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(
    user: Omit<User, 'password'>
  ): Promise<{ token: string }> {
    const payload = { username: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
