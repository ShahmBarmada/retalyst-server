import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Vouchers } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Vouchers])],
  controllers: [VouchersController],
  providers: [VouchersService],
  exports: [MikroOrmModule],
})
export class VouchersModule {}
