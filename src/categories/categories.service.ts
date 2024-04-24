import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Categories } from 'src/database/entities';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Categories)
    private repo: EntityRepository<Categories>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ ctgy_id: id });
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const newEntry = this.repo.create(createCategoryDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updateEntry = await this.repo.findOneOrFail({ ctgy_id: id });
    wrap(updateEntry).assign(updateCategoryDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ ctgy_id: id });
  }
}
