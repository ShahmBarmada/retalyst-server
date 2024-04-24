import { OprTypes, OprStates, Users, Addresses } from 'src/database/entities';

export class CreateOperationDto {
  oper_type: OprTypes;
  oper_state: OprStates;
  oper_created!: string;
  oper_due?: string;
  oper_fin?: string;
  oper_period!: number;
  oper_client: Users;
  oper_addr: Addresses;
  oper_sales: Users;
  oper_delivery?: Users;
  oper_note?: string;
  oper_vouchers?: string[];
}
