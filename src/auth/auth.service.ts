import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/signin.dto';
// import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    try {
      const user = await this.usersService.findOneByPhone(signInDto.phone);
      const check = await bcrypt.compare(signInDto.pass, user.user_hash);
      if (!check) {
        throw new HttpException(
          'Please check your phone number / password',
          HttpStatus.BAD_REQUEST,
        );
      } else if (user.user_deleted === undefined) {
        throw new HttpException(
          'Please contact support',
          HttpStatus.BAD_REQUEST,
        );
      }
      const payload = { sub: user.user_id, role: user.user_role };
      return { access_token: await this.jwtService.signAsync(payload) };
    } catch (error) {
      throw new HttpException(
        'Please check your phone number / password',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // async signUp(signUpDto: SignUpDto): Promise<any> {
  //   const user = { ...signUpDto };
  //   const { ...result } = user;
  //   return result;
  // }
}
