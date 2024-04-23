import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(403)
  async getAny() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
