import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { OprItems } from 'src/database/entities';
import { CreateOpritemDto } from './dto/create-opritem.dto';
import { UpdateOpritemDto } from './dto/update-opritem.dto';

@Injectable()
export class OpritemsService {
  constructor(
    private em: EntityManager,
    @InjectRepository(OprItems)
    private repo: EntityRepository<OprItems>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ opit_id: id });
  }

  async create(createOpritemDto: CreateOpritemDto) {
    const newEntry = this.repo.create(createOpritemDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateOpritemDto: UpdateOpritemDto) {
    const updateEntry = await this.repo.findOneOrFail({ opit_id: id });
    wrap(updateEntry).assign(updateOpritemDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ opit_id: id });
  }
}
