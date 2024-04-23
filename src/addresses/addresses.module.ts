import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  controllers: [AddressesController],
  providers: [AddressesService],
  exports: [TypeOrmModule],
})
export class AddressesModule {}
