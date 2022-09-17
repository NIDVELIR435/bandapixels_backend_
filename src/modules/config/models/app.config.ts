import { Injectable } from '@nestjs/common';
import { NodeEnv } from '@backend/modules/config/enums/node-env.enum';
import { AppConfigService } from '@backend/modules/config/app.config.service';

@Injectable()
export class AppConfig {
  readonly port: number;
  readonly nodeEnv: NodeEnv;
  readonly jwtSecret: string;

  constructor(private readonly configService: AppConfigService) {
    this.port = Number(this.configService.get('APP_PORT'));
    this.nodeEnv = this.configService.get('NODE_ENV') as NodeEnv;
    this.jwtSecret = this.configService.get('JWT_SECRET') as string;
  }
}
