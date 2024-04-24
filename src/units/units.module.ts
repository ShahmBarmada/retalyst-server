import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Units } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Units])],
  controllers: [UnitsController],
  providers: [UnitsService],
  exports: [MikroOrmModule],
})
export class UnitsModule {}
