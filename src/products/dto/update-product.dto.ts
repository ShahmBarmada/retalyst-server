import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Categories } from 'src/categories/entities/categories.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  public priceold?: number;
  public active?: boolean;
  public promo?: boolean;
  public category?: Categories;
  public image?: Buffer;
}
