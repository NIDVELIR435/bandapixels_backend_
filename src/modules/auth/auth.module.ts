import { Module } from '@nestjs/common';
import { AuthService } from '@backend/modules/auth/services/auth.service';
import { UsersModule } from '@backend/modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from '@backend/modules/auth/strategies/basic.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from '@backend/modules/config/app.config.module';
import { AuthController } from '@backend/modules/auth/auth.controller';
import { JwtStrategy } from '@backend/modules/auth/strategies/jwt.strategy';
import { AppConfig } from '@backend/modules/config/models/app.config';

@Module({
  imports: [
    AppConfigModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfig],
      useFactory: async (appConfig: AppConfig) => {
        return {
          secret: appConfig.jwtSecret,
          signOptions: { expiresIn: '10h' },
        };
      },
    }),
    UsersModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService, BasicStrategy],
})
export class AuthModule {}
