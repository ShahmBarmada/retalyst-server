import { Injectable } from '@nestjs/common';

import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Vouchers)
    private vouchersRepository: Repository<Vouchers>,
  ) {}
  async create(createVoucherDto: CreateVoucherDto) {
    return await this.vouchersRepository.save(createVoucherDto);
  }

  async findAll() {
    return await this.vouchersRepository.find();
  }

  async findOne(id: number) {
    return await this.vouchersRepository.findOneBy({ id });
  }

  async update(id: number, updateVoucherDto: UpdateVoucherDto) {
    const toUpdate = await this.vouchersRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateVoucherDto);
    return await this.vouchersRepository.save(updated);
  }

  async remove(id: number) {
    return await this.vouchersRepository.delete(id);
  }
}
