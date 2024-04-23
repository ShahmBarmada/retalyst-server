import { Injectable } from '@nestjs/common';

import { CreateOprtypeDto } from './dto/create-oprtype.dto';
import { UpdateOprtypeDto } from './dto/update-oprtype.dto';

@Injectable()
export class OprtypesService {
  constructor(
    @InjectRepository(OprTypes)
    private oprTypesRepository: Repository<OprTypes>,
  ) {}
  async create(createOprtypeDto: CreateOprtypeDto) {
    return await this.oprTypesRepository.save(createOprtypeDto);
  }

  async findAll() {
    return await this.oprTypesRepository.find();
  }

  async findOne(id: number) {
    return await this.oprTypesRepository.findOneBy({ id });
  }

  async update(id: number, updateOprtypeDto: UpdateOprtypeDto) {
    const toUpdate = await this.oprTypesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateOprtypeDto);
    return await this.oprTypesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.oprTypesRepository.delete(id);
  }
}
