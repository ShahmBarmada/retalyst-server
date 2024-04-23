import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Operations])],
  controllers: [OperationsController],
  providers: [OperationsService],
  exports: [TypeOrmModule],
})
export class OperationsModule {}
