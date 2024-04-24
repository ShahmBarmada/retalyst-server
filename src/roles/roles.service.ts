import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Roles } from 'src/database/entities';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Roles)
    private repo: EntityRepository<Roles>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ role_id: id });
  }

  async create(createRoleDto: CreateRoleDto) {
    const newEntry = this.repo.create(createRoleDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const updateEntry = await this.repo.findOneOrFail({ role_id: id });
    wrap(updateEntry).assign(updateRoleDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ role_id: id });
  }
}
