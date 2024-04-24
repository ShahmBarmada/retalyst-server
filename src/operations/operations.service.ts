import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Operations } from 'src/database/entities';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Injectable()
export class OperationsService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Operations)
    private repo: EntityRepository<Operations>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ oper_id: id });
  }

  async create(createOperationDto: CreateOperationDto) {
    const newEntry = this.repo.create(createOperationDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateOperationeDto: UpdateOperationDto) {
    const updateEntry = await this.repo.findOneOrFail({ oper_id: id });
    wrap(updateEntry).assign(updateOperationeDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ oper_id: id });
  }
}
