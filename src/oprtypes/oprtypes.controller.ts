import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OprtypesService } from './oprtypes.service';
import { CreateOprtypeDto } from './dto/create-oprtype.dto';
import { UpdateOprtypeDto } from './dto/update-oprtype.dto';

@Controller('oprs-types')
export class OprtypesController {
  constructor(private readonly oprtypesService: OprtypesService) {}

  @Post()
  create(@Body() createOprtypeDto: CreateOprtypeDto) {
    return this.oprtypesService.create(createOprtypeDto);
  }

  @Get()
  findAll() {
    return this.oprtypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oprtypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOprtypeDto: UpdateOprtypeDto) {
    return this.oprtypesService.update(+id, updateOprtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oprtypesService.remove(+id);
  }
}
