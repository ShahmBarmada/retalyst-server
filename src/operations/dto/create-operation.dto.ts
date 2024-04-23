import { Addresses } from 'src/addresses/entities/addresses.entity';
import { OprStates } from 'src/oprstates/entities/oprstates.entity';
import { OprTypes } from 'src/oprtypes/entities/oprtypes.entity';
import { Users } from 'src/users/entities/users.entity';

export class CreateOperationDto {
  public created: string;
  public due: string;
  public period: number;
  public vouchers: string[];
  public type: OprTypes;
  public state: OprStates;
  public client: Users;
  public employee: Users;
  public address: Addresses;
}
