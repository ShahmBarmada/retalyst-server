import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaDto } from './create-area.dto';

export class UpdateAreaDto extends PartialType(CreateAreaDto) {
  public gov?: string;
  public div?: string;
  public city?: string;
  public district?: string;
  public active?: boolean;
}
