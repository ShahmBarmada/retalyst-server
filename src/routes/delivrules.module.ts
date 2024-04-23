import { Module } from '@nestjs/common';
import { DelivrulesService } from './delivrules.service';
import { DelivrulesController } from './delivrules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DelivRules } from './entities/delivrules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DelivRules])],
  controllers: [DelivrulesController],
  providers: [DelivrulesService],
  exports: [TypeOrmModule],
})
export class DelivrulesModule {}
