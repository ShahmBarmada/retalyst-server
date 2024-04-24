import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Routes } from 'src/database/entities';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RoutesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Routes)
    private repo: EntityRepository<Routes>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ rout_id: id });
  }

  async create(createRouteDto: CreateRouteDto) {
    const newEntry = this.repo.create(createRouteDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    const updateEntry = await this.repo.findOneOrFail({ rout_id: id });
    wrap(updateEntry).assign(updateRouteDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ rout_id: id });
  }
}
