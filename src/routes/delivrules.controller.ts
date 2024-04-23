import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DelivrulesService } from './delivrules.service';
import { CreateDelivruleDto } from './dto/create-delivrule.dto';
import { UpdateDelivruleDto } from './dto/update-delivrule.dto';

@Controller('rules')
export class DelivrulesController {
  constructor(private readonly delivrulesService: DelivrulesService) {}

  @Post()
  create(@Body() createDelivruleDto: CreateDelivruleDto) {
    return this.delivrulesService.create(createDelivruleDto);
  }

  @Get()
  findAll() {
    return this.delivrulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delivrulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDelivruleDto: UpdateDelivruleDto,
  ) {
    return this.delivrulesService.update(+id, updateDelivruleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delivrulesService.remove(+id);
  }
}
