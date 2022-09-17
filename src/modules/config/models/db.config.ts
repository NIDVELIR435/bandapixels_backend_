import { Injectable } from '@nestjs/common';
import { AppConfigService } from '@backend/modules/config/app.config.service';

@Injectable()
export class DbConfig {
  readonly host: string;
  readonly port: number;
  readonly username: string;
  readonly password: string;
  readonly database: string;
  readonly logging: boolean;
  readonly synchronize: boolean;

  constructor(private readonly configService: AppConfigService) {
    this.host = this.configService.get('DB_HOST') as string;
    this.port = Number(this.configService.get('DB_PORT')) as number;
    this.username = this.configService.get('DB_USERNAME') as string;
    this.password = this.configService.get('DB_PASSWORD') as string;
    this.database = this.configService.get('DB_NAME') as string;
    this.logging = this.configService.get('DB_LOGGING') !== 'false';
    this.synchronize =
      this.configService.get('DB_SYNCHRONIZE') !== 'false';
  }
}
