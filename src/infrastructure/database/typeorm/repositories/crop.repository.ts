import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Crop } from '../../../../domain/entities/crop.entity';
import { ICropRepository } from '../../../../domain/repositories/crop.repository.interface';
import { CropOrmEntity } from '../entities/crop.orm-entity';
import { CropMapper } from '../mappers/crop.mapper';

@Injectable()
export class CropRepository implements ICropRepository {
  constructor(
    @InjectRepository(CropOrmEntity)
    private readonly repo: Repository<CropOrmEntity>,
  ) {}

  async create(crop: Crop): Promise<Crop> {
    const ormEntity = CropMapper.toOrm(crop);
    const saved = await this.repo.save(ormEntity);
    return CropMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Crop | null> {
    const orm = await this.repo.findOne({ where: { id } });
    return orm ? CropMapper.toDomain(orm) : null;
  }
}
