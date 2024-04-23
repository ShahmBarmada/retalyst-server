import { PartialType } from '@nestjs/mapped-types';
import { CreateOprtypeDto } from './create-oprtype.dto';

export class UpdateOprtypeDto extends PartialType(CreateOprtypeDto) {}
