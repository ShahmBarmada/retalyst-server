import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Products } from 'src/database/entities';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Products)
    private repo: EntityRepository<Products>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ prod_id: id });
  }

  async create(createProductDto: CreateProductDto) {
    const newEntry = this.repo.create(createProductDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateEntry = await this.repo.findOneOrFail({ prod_id: id });
    wrap(updateEntry).assign(updateProductDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ prod_id: id });
  }
}
