import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Roles } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [MikroOrmModule],
})
export class RolesModule {}
