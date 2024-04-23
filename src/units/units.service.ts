import { Injectable } from '@nestjs/common';

import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Units) private unitsRepository: Repository<Units>,
  ) {}
  async create(createUnitDto: CreateUnitDto) {
    return await this.unitsRepository.save(createUnitDto);
  }

  async findAll() {
    return await this.unitsRepository.find();
  }

  async findOne(id: number) {
    return await this.unitsRepository.findOneBy({ id });
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    const toUpdate = await this.unitsRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateUnitDto);
    return await this.unitsRepository.save(updated);
  }

  async remove(id: number) {
    return await this.unitsRepository.delete(id);
  }
}
