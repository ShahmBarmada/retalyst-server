import { Module } from '@nestjs/common';
import { OpritemsService } from './opritems.service';
import { OpritemsController } from './opritems.controller';


@Module({
  imports: [TypeOrmModule.forFeature([OprItems])],
  controllers: [OpritemsController],
  providers: [OpritemsService],
  exports: [TypeOrmModule],
})
export class OpritemsModule {}
