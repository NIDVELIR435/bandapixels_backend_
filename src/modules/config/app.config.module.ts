import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbConfig } from '@backend/modules/config/models/db.config';
import { AppConfig } from '@backend/modules/config/models/app.config';
import { AppConfigService } from '@backend/modules/config/app.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppConfigService, AppConfig, DbConfig],
  exports: [AppConfig, DbConfig],
})
export class AppConfigModule {}
