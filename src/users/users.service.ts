import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Users } from 'src/database/entities';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Users)
    private repo: EntityRepository<Users>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number): Promise<Users | undefined> {
    return await this.repo.findOne({ user_id: id });
  }

  async findOneByPhone(phone: string): Promise<Users | undefined> {
    return await this.repo.findOne({ user_phone: phone });
  }

  async create(createUserDto: CreateUserDto) {
    const newEntry = this.repo.create(createUserDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateEntry = await this.repo.findOneOrFail({ user_id: id });
    wrap(updateEntry).assign(updateUserDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ user_id: id });
  }
}
