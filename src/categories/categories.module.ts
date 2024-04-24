import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Categories } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [MikroOrmModule],
})
export class CategoriesModule {}
