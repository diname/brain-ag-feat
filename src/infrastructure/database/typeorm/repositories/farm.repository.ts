import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from '../../../../domain/entities/farm.entity';
import { IFarmRepository } from '../../../../domain/repositories/farm.repository.interface';
import { FarmOrmEntity } from '../entities/farm.orm-entity';
import { FarmMapper } from '../mappers/farm.mapper';

@Injectable()
export class FarmRepository implements IFarmRepository {
  constructor(
    @InjectRepository(FarmOrmEntity)
    private readonly repo: Repository<FarmOrmEntity>,
  ) {}

  async create(farm: Farm): Promise<Farm> {
    const saved = await this.repo.save(FarmMapper.toOrm(farm));
    return FarmMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Farm | null> {
    const orm = await this.repo.findOne({ where: { id } });
    return orm ? FarmMapper.toDomain(orm) : null;
  }

  async findByFarmerId(farmerId: string): Promise<Farm[]> {
    const farms = await this.repo.find({ where: { farmerId } });
    return farms.map(FarmMapper.toDomain);
  }

  async update(farm: Farm): Promise<Farm> {
    const updated = await this.repo.save(FarmMapper.toOrm(farm));
    return FarmMapper.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
