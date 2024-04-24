import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Routes } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Routes])],
  controllers: [RoutesController],
  providers: [RoutesService],
  exports: [MikroOrmModule],
})
export class RoutesModule {}
