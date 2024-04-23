import { Module } from '@nestjs/common';
import { OprstatesService } from './oprstates.service';
import { OprstatesController } from './oprstates.controller';


@Module({
  imports: [TypeOrmModule.forFeature([OprStates])],
  controllers: [OprstatesController],
  providers: [OprstatesService],
  exports: [TypeOrmModule],
})
export class OprstatesModule {}
