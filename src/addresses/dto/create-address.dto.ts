import { Areas } from 'src/areas/entities/areas.entity';
import { Users } from 'src/users/entities/users.entity';

export class CreateAddressDto {
  public street: string;
  public building: string;
  public floor: number;
  public aprt: number;
  public area: Areas;
  public user: Users;
}
