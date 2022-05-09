import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';

export const Role = (...statuses: string[]) => {
  return applyDecorators(
    SetMetadata('statuses', statuses),
    UseGuards(RolesGuard),
  );
};
