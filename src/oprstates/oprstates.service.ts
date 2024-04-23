import { Injectable } from '@nestjs/common';

import { CreateOprstateDto } from './dto/create-oprstate.dto';
import { UpdateOprstateDto } from './dto/update-oprstate.dto';

@Injectable()
export class OprstatesService {
  constructor(
    @InjectRepository(OprStates)
    private oprStatesRepository: Repository<OprStates>,
  ) {}
  async create(createOprstateDto: CreateOprstateDto) {
    return await this.oprStatesRepository.save(createOprstateDto);
  }

  async findAll() {
    return await this.oprStatesRepository.find();
  }

  async findOne(id: number) {
    return await this.oprStatesRepository.findOneBy({ id });
  }

  async update(id: number, updateOprstateDto: UpdateOprstateDto) {
    const toUpdate = await this.oprStatesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateOprstateDto);
    return await this.oprStatesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.oprStatesRepository.delete(id);
  }
}
