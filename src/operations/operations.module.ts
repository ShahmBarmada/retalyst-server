import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Operations } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Operations])],
  controllers: [OperationsController],
  providers: [OperationsService],
  exports: [MikroOrmModule],
})
export class OperationsModule {}
