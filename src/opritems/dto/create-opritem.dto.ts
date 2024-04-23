import { Operations } from 'src/operations/entities/operations.entity';
import { Products } from 'src/products/entities/products.entity';

export class CreateOpritemDto {
  public opr: Operations;
  public prd: Products;
  public qty: number;
  public price: number;
}
