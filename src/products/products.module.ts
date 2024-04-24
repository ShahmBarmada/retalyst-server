import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Products } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [MikroOrmModule],
})
export class ProductsModule {}
