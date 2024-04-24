import { Categories, Units } from 'src/database/entities';

export class CreateProductDto {
  prod_barcode!: string;
  prod_desc!: string;
  prod_curr!: number;
  prod_prev!: number;
  prod_promo!: boolean;
  prod_actv!: boolean;
  prod_img?: Buffer;
  prod_ctgy: Categories;
  prod_unit: Units;
}
