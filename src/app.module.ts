import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from '@backend/app.controller';
import { AppService } from '@backend/app.service';
import { AppConfigModule } from '@backend/modules/config/app.config.module';
import { DbConfig } from '@backend/modules/config/models/db.config';
import { UsersModule } from '@backend/modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Entities from './entity';
import { AuthModule } from '@backend/modules/auth/auth.module';
import { MeetingRoomModule } from '@backend/modules/meeting-room/meeting-room.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [DbConfig],
      useFactory: async (dbConfig: DbConfig) => {
        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: Object.values(Entities),
          logging: dbConfig.logging,
          synchronize: dbConfig.synchronize,
        };
      },
    }),

    UsersModule,
    AppConfigModule,
    AuthModule,
    MeetingRoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
