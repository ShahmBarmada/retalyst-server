import { Module } from '@nestjs/common';
import { OprtypesService } from './oprtypes.service';
import { OprtypesController } from './oprtypes.controller';


@Module({
  imports: [TypeOrmModule.forFeature([OprTypes])],
  controllers: [OprtypesController],
  providers: [OprtypesService],
  exports: [TypeOrmModule],
})
export class OprtypesModule {}
