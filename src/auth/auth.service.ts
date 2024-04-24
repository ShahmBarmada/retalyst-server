import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(userPhone: string, userPass: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(userPhone);
    // const hash = await bcrypt.hash(userPass, 1);
    // console.log(hash);
    const check = await bcrypt.compare(userPass, user.user_hash);

    if (!check) {
      throw new UnauthorizedException();
    }
    const { ...result } = user;
    return result;
  }
}
