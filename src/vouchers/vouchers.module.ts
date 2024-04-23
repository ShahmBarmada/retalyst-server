import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Vouchers])],
  controllers: [VouchersController],
  providers: [VouchersService],
  exports: [TypeOrmModule],
})
export class VouchersModule {}
