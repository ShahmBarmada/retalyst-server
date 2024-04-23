import { Units } from 'src/units/entities/units.entity';

export class CreateProductDto {
  public desc: string;
  public pricecur: number;
  public unit: Units;
}
