import { Injectable } from '@nestjs/common';

import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Addresses)
    private addressesRepository: Repository<Addresses>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.addressesRepository.save(createAddressDto);
  }

  async findAll() {
    return await this.addressesRepository.find();
  }

  async findOne(id: number) {
    return await this.addressesRepository.findOneBy({ id });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const toUpdate = await this.addressesRepository.findOneBy({ id });
    const updated = Object.assign(toUpdate, updateAddressDto);
    return await this.addressesRepository.save(updated);
  }

  async remove(id: number) {
    return await this.addressesRepository.delete(id);
  }
}
