import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Vouchers } from 'src/database/entities';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Injectable()
export class VouchersService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Vouchers)
    private repo: EntityRepository<Vouchers>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ voch_id: id });
  }

  async create(createVoucherDto: CreateVoucherDto) {
    const newEntry = this.repo.create(createVoucherDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateVoucherDto: UpdateVoucherDto) {
    const updateEntry = await this.repo.findOneOrFail({ voch_id: id });
    wrap(updateEntry).assign(updateVoucherDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ voch_id: id });
  }
}
