import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/postgresql';
import { Addresses } from 'src/database/entities';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(
    private em: EntityManager,
    @InjectRepository(Addresses)
    private repo: EntityRepository<Addresses>,
  ) {}

  async findAll() {
    return await this.repo.findAll();
  }

  async findOneById(id: number) {
    return await this.repo.findOne({ addr_id: id });
  }

  async create(createAddressDto: CreateAddressDto) {
    const newEntry = this.repo.create(createAddressDto);
    await this.em.persistAndFlush(newEntry);
    return newEntry;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const updateEntry = await this.repo.findOneOrFail({ addr_id: id });
    wrap(updateEntry).assign(updateAddressDto);
    await this.em.flush();
    return updateEntry;
  }

  async remove(id: number) {
    return await this.repo.nativeDelete({ addr_id: id });
  }
}
