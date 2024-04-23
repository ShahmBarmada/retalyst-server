import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Units])],
  controllers: [UnitsController],
  providers: [UnitsService],
  exports: [TypeOrmModule],
})
export class UnitsModule {}
