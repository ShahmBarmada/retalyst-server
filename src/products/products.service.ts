import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const toUpdate = await this.productsRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateProductDto);
    return await this.productsRepository.save(updated);
  }

  async remove(id: number) {
    return await this.productsRepository.delete(id);
  }
}
