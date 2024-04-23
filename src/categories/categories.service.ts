import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoriesRepository.save(createCategoryDto);
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const toUpdate = await this.categoriesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateCategoryDto);
    return await this.categoriesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.categoriesRepository.delete(id);
  }
}
