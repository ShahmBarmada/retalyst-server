import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Areas } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Areas])],
  controllers: [AreasController],
  providers: [AreasService],
  exports: [MikroOrmModule],
})
export class AreasModule {}
