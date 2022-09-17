import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { StrategyName } from '@backend/modules/auth/enums/strategy-name.enum';

@Injectable()
export class BasicAuthGuard extends AuthGuard(StrategyName.BASIC) {}
