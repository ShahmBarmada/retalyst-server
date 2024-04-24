import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Addresses } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Addresses])],
  controllers: [AddressesController],
  providers: [AddressesService],
  exports: [MikroOrmModule],
})
export class AddressesModule {}
