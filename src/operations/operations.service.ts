import { Injectable } from '@nestjs/common';

import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operations)
    private operationsRepository: Repository<Operations>,
  ) {}

  async create(createOperationDto: CreateOperationDto) {
    return await this.operationsRepository.save(createOperationDto);
  }

  async findAll() {
    return await this.operationsRepository.find();
  }

  async findOne(id: number) {
    return await this.operationsRepository.findOneBy({ id });
  }

  async update(id: number, updateOperationDto: UpdateOperationDto) {
    const toUpdate = await this.operationsRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateOperationDto);
    return await this.operationsRepository.save(updated);
  }

  async remove(id: number) {
    return await this.operationsRepository.delete(id);
  }
}
