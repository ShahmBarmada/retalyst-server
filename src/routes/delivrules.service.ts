import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DelivRules } from './entities/delivrules.entity';
import { CreateDelivruleDto } from './dto/create-delivrule.dto';
import { UpdateDelivruleDto } from './dto/update-delivrule.dto';

@Injectable()
export class DelivrulesService {
  constructor(
    @InjectRepository(DelivRules)
    private delivRulesRepository: Repository<DelivRules>,
  ) {}
  async create(createDelivruleDto: CreateDelivruleDto) {
    return await this.delivRulesRepository.save(createDelivruleDto);
  }

  async findAll() {
    return await this.delivRulesRepository.find();
  }

  async findOne(id: number) {
    return await this.delivRulesRepository.findOneBy({ id });
  }

  async update(id: number, updateDelivruleDto: UpdateDelivruleDto) {
    const toUpdate = await this.delivRulesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateDelivruleDto);
    return await this.delivRulesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.delivRulesRepository.delete(id);
  }
}
