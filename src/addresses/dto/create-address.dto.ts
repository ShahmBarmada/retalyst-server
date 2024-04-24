import { Areas } from 'src/database/entities';
import { Users } from 'src/database/entities';

export class CreateAddressDto {
  addr_area: Areas;
  addr_nbhd: string;
  addr_str: string;
  addr_bld: string;
  addr_flr: number;
  addr_apt: number;
  addr_note: string;
  addr_user: Users;
}
