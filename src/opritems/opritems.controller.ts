import {
  Controller,
  Get,
  Post,
  Body,
  Put,
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
  async create(@Body() createOpritemDto: CreateOpritemDto) {
    return this.opritemsService.create(createOpritemDto);
  }

  @Get()
  async findAll() {
    return this.opritemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.opritemsService.findOneById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOpritemDto: UpdateOpritemDto,
  ) {
    return this.opritemsService.update(+id, updateOpritemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.opritemsService.remove(+id);
  }
}
