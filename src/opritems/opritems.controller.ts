import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpritemsService } from './opritems.service';
import { CreateOpritemDto } from './dto/create-opritem.dto';
import { UpdateOpritemDto } from './dto/update-opritem.dto';

@Controller('oprs-items')
export class OpritemsController {
  constructor(private readonly opritemsService: OpritemsService) {}

  @Post()
  create(@Body() createOpritemDto: CreateOpritemDto) {
    return this.opritemsService.create(createOpritemDto);
  }

  @Get()
  findAll() {
    return this.opritemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opritemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpritemDto: UpdateOpritemDto) {
    return this.opritemsService.update(+id, updateOpritemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opritemsService.remove(+id);
  }
}
