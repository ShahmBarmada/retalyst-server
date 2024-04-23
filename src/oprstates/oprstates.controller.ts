import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
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
  create(@Body() createOprstateDto: CreateOprstateDto) {
    return this.oprstatesService.create(createOprstateDto);
  }

  @Get()
  findAll() {
    return this.oprstatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oprstatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOprstateDto: UpdateOprstateDto,
  ) {
    return this.oprstatesService.update(+id, updateOprstateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oprstatesService.remove(+id);
  }
}
