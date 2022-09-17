import { applyDecorators, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '@backend/modules/auth/guards/jwt-auth.guard';

export const JwtAuth = () =>
  applyDecorators(
    ApiBearerAuth(),
    UseGuards(JwtAuthGuard),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
