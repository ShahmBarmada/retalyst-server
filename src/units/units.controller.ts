import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  async create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitsService.create(createUnitDto);
  }

  @Get()
  async findAll() {
    return this.unitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.unitsService.findOneById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUnitDto: UpdateUnitDto) {
    return this.unitsService.update(+id, updateUnitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.unitsService.remove(+id);
  }
}
