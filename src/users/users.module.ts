import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Users } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MikroOrmModule, UsersService],
})
export class UsersModule {}
