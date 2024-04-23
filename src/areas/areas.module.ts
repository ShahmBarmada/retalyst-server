import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Areas])],
  controllers: [AreasController],
  providers: [AreasService],
  exports: [TypeOrmModule],
})
export class AreasModule {}
