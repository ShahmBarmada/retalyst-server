import { Injectable } from '@nestjs/common';

import { CreateOpritemDto } from './dto/create-opritem.dto';
import { UpdateOpritemDto } from './dto/update-opritem.dto';

@Injectable()
export class OpritemsService {
  constructor(
    @InjectRepository(OprItems)
    private opritemsRepository: Repository<OprItems>,
  ) {}

  async create(createOpritemDto: CreateOpritemDto) {
    return await this.opritemsRepository.save(createOpritemDto);
  }

  async findAll() {
    return await this.opritemsRepository.find();
  }

  async findOne(id: number) {
    return await this.opritemsRepository.findOneBy({ id });
  }

  async update(id: number, updateOpritemDto: UpdateOpritemDto) {
    const toUpdate = await this.opritemsRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateOpritemDto);
    return await this.opritemsRepository.save(updated);
  }

  async remove(id: number) {
    return await this.opritemsRepository.delete(id);
  }
}
