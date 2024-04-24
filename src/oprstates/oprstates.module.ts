import { Module } from '@nestjs/common';
import { OprstatesService } from './oprstates.service';
import { OprstatesController } from './oprstates.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OprStates } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([OprStates])],
  controllers: [OprstatesController],
  providers: [OprstatesService],
  exports: [MikroOrmModule],
})
export class OprstatesModule {}
