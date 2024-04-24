import { Module } from '@nestjs/common';
import { OprtypesService } from './oprtypes.service';
import { OprtypesController } from './oprtypes.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OprTypes } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([OprTypes])],
  controllers: [OprtypesController],
  providers: [OprtypesService],
  exports: [MikroOrmModule],
})
export class OprtypesModule {}
