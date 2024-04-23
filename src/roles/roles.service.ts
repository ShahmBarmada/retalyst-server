import { Injectable } from '@nestjs/common';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.rolesRepository.save(createRoleDto);
  }

  async findAll() {
    return await this.rolesRepository.find();
  }

  async findOne(id: number) {
    return await this.rolesRepository.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const toUpdate = await this.rolesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateRoleDto);
    return await this.rolesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.rolesRepository.delete(id);
  }
}
