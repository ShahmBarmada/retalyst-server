import { Module } from '@nestjs/common';
import { OpritemsService } from './opritems.service';
import { OpritemsController } from './opritems.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OprItems } from 'src/database/entities';

@Module({
  imports: [MikroOrmModule.forFeature([OprItems])],
  controllers: [OpritemsController],
  providers: [OpritemsService],
  exports: [MikroOrmModule],
})
export class OpritemsModule {}
