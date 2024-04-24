import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Areas } from 'src/database/entities';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Areas)
    private repo: EntityRepository<Areas>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ area_id: id });
  }

  async create(createAreaDto: CreateAreaDto) {
    const newEntry = this.repo.create(createAreaDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    const updateEntry = await this.repo.findOneOrFail({ area_id: id });
    wrap(updateEntry).assign(updateAreaDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ area_id: id });
  }
}
