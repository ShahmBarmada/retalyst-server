import { PartialType } from '@nestjs/mapped-types';
import { CreateOprstateDto } from './create-oprstate.dto';

export class UpdateOprstateDto extends PartialType(CreateOprstateDto) {}
