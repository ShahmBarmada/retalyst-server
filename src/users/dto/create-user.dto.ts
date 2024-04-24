import { Roles } from 'src/database/entities';

export class CreateUserDto {
  user_name!: string;
  user_phone!: string;
  user_email?: string;
  user_hash!: string;
  user_created!: string;
  user_activated?: string;
  user_deleted?: string;
  user_role: Roles;
}
