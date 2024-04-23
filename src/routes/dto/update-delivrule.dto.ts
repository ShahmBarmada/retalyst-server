import { PartialType } from '@nestjs/mapped-types';
import { CreateDelivruleDto } from './create-delivrule.dto';
import { Areas } from 'src/areas/entities/areas.entity';

export class UpdateDelivruleDto extends PartialType(CreateDelivruleDto) {
  public employees?: number[];
  public area?: Areas;
  public active: boolean;
}
