import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { OprstatesService } from './oprstates.service';
import { CreateOprstateDto } from './dto/create-oprstate.dto';
import { UpdateOprstateDto } from './dto/update-oprstate.dto';

@Controller('oprs-states')
export class OprstatesController {
  constructor(private readonly oprstatesService: OprstatesService) {}

  @Post()
  async create(@Body() createOprstateDto: CreateOprstateDto) {
    return this.oprstatesService.create(createOprstateDto);
  }

  @Get()
  async findAll() {
    return this.oprstatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.oprstatesService.findOneById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOprstateDto: UpdateOprstateDto,
  ) {
    return this.oprstatesService.update(+id, updateOprstateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.oprstatesService.remove(+id);
  }
}
