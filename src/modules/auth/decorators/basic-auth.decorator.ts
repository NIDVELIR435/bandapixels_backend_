import { applyDecorators, UseGuards } from '@nestjs/common';
import { BasicAuthGuard } from '@backend/modules/auth/guards/basic-auth.guard';
import {
  ApiBasicAuth,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const LocalAuth = () =>
  applyDecorators(
    ApiBasicAuth(),
    UseGuards(BasicAuthGuard),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
