import { Injectable } from '@nestjs/common';

import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Areas) private areasRepository: Repository<Areas>,
  ) {}

  async create(createAreaDto: CreateAreaDto) {
    return await this.areasRepository.save(createAreaDto);
  }

  async findAll() {
    return await this.areasRepository.find();
  }

  async findOne(id: number) {
    return await this.areasRepository.findOneBy({ id });
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    const toUpdate = await this.areasRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateAreaDto);
    return await this.areasRepository.save(updated);
  }

  async remove(id: number) {
    return await this.areasRepository.delete(id);
  }
}
