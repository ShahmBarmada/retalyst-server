import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { OprTypes } from 'src/database/entities';
import { CreateOprtypeDto } from './dto/create-oprtype.dto';
import { UpdateOprtypeDto } from './dto/update-oprtype.dto';

@Injectable()
export class OprtypesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(OprTypes)
    private repo: EntityRepository<OprTypes>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ opty_id: id });
  }

  async create(createOprtypDto: CreateOprtypeDto) {
    const newEntry = this.repo.create(createOprtypDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateOprtypDto: UpdateOprtypeDto) {
    const updateEntry = await this.repo.findOneOrFail({ opty_id: id });
    wrap(updateEntry).assign(updateOprtypDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ opty_id: id });
  }
}
