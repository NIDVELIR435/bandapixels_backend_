import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@backend/entity';
import { Repository } from 'typeorm';
import { SignUpBodyDto } from '@backend/modules/users/dto/sign-up-body.dto';
import { isNil } from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  public async signUp({ email, password }: SignUpBodyDto) {
    const existUser = await this.findUserByEmail({ email });

    if (!isNil(existUser))
      throw new BadRequestException(
        `user where email ${email} already exist`
      );

    return this.usersRepository.save({
      email,
      password,
    });
  }

  public findUserByEmail({ email }: Pick<SignUpBodyDto, 'email'>) {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  public findUserById({ id }: Pick<User, 'id'>) {
    return this.usersRepository.findOne({
      where: { id },
    });
  }
}
