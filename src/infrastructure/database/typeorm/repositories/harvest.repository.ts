import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Harvest } from '../../../../domain/entities/harvest.entity';
import { IHarvestRepository } from '../../../../domain/repositories/harvest.repository.interface';
import { HarvestOrmEntity } from '../entities/harvest.orm-entity';
import { HarvestMapper } from '../mappers/harvest.mapper';

@Injectable()
export class HarvestRepository implements IHarvestRepository {
  constructor(
    @InjectRepository(HarvestOrmEntity)
    private readonly repo: Repository<HarvestOrmEntity>,
  ) {}

  async create(harvest: Harvest): Promise<Harvest> {
    const ormEntity = HarvestMapper.toOrm(harvest);
    const saved = await this.repo.save(ormEntity);
    return HarvestMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Harvest | null> {
    const orm = await this.repo.findOne({ where: { id } });
    return orm ? HarvestMapper.toDomain(orm) : null;
  }

  async findByFarmId(farmId: string): Promise<Harvest[]> {
    const results = await this.repo.find({ where: { farmId } });
    return results.map(HarvestMapper.toDomain);
  }
}
