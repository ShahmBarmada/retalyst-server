import {
  Controller,
  Get,
  Post,
  Body,
  Put,
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
  async create(@Body() createOprtypeDto: CreateOprtypeDto) {
    return this.oprtypesService.create(createOprtypeDto);
  }

  @Get()
  async findAll() {
    return this.oprtypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.oprtypesService.findOneById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOprtypeDto: UpdateOprtypeDto,
  ) {
    return this.oprtypesService.update(+id, updateOprtypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.oprtypesService.remove(+id);
  }
}
