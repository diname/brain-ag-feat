import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farmer } from '../../../../domain/entities/farmer.entity';
import { IFarmerRepository } from '../../../../domain/repositories/farmer.repository.interface';
import { FarmerOrmEntity } from '../entities/farmer.orm-entity';
import { FarmerMapper } from '../mappers/farmer.mapper';

@Injectable()
export class FarmerRepository implements IFarmerRepository {
  constructor(
    @InjectRepository(FarmerOrmEntity)
    private readonly ormRepo: Repository<FarmerOrmEntity>,
  ) {}

  async create(farmer: Farmer): Promise<Farmer> {
    const orm = FarmerMapper.toOrm(farmer);
    const saved = await this.ormRepo.save(orm);
    return FarmerMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Farmer | null> {
    const orm = await this.ormRepo.findOne({
      where: { id },
      relations: ['farms'],
    });
    return orm ? FarmerMapper.toDomain(orm) : null;
  }

  async update(farmer: Farmer): Promise<Farmer> {
    const orm = FarmerMapper.toOrm(farmer);
    const updated = await this.ormRepo.save(orm);
    return FarmerMapper.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
