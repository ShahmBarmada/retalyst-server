import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { OprStates } from 'src/database/entities';
import { CreateOprstateDto } from './dto/create-oprstate.dto';
import { UpdateOprstateDto } from './dto/update-oprstate.dto';

@Injectable()
export class OprstatesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(OprStates)
    private repo: EntityRepository<OprStates>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ opst_id: id });
  }

  async create(createOprstateDto: CreateOprstateDto) {
    const newEntry = this.repo.create(createOprstateDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateOprstateDto: UpdateOprstateDto) {
    const updateEntry = await this.repo.findOneOrFail({ opst_id: id });
    wrap(updateEntry).assign(updateOprstateDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ opst_id: id });
  }
}
