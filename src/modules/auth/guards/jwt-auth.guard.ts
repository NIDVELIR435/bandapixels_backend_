import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategyName } from '@backend/modules/auth/enums/strategy-name.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard(StrategyName.JWT) {}
