import { PartialType } from '@nestjs/mapped-types';
import { CreateOpritemDto } from './create-opritem.dto';

export class UpdateOpritemDto extends PartialType(CreateOpritemDto) {}
