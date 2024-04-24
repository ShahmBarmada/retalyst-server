import { Operations, Products } from 'src/database/entities';

export class CreateOpritemDto {
  opit_prod: Products;
  opit_oper: Operations;
  opit_qty!: number;
  opit_val!: number;
}
