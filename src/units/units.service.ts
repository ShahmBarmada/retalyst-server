import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Units } from 'src/database/entities';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Units)
    private repo: EntityRepository<Units>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ unit_id: id });
  }

  async create(createUnitDto: CreateUnitDto) {
    const newEntry = this.repo.create(createUnitDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    const updateEntry = await this.repo.findOneOrFail({ unit_id: id });
    wrap(updateEntry).assign(updateUnitDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ unit_id: id });
  }
}
