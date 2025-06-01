import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farm } from 'src/domain/entities/farm.entity';
import { CropRepository } from 'src/domain/repositories/crop.repository.interface';
import { FarmRepository } from 'src/domain/repositories/farm.repository.interface';
import { FarmerRepository } from 'src/domain/repositories/farmer.repository';
import { CreateFarmDto } from '../../application/dtos/create-farm.dto';

@Injectable()
export class FarmService {
  constructor(
    @InjectRepository(FarmRepository)
    private readonly farmRepo: FarmRepository,

    @InjectRepository(FarmerRepository)
    private readonly farmerRepo: FarmerRepository,

    @InjectRepository(CropRepository)
    private readonly cropRepo: CropRepository,
  ) {}

  async createFarm(dto: CreateFarmDto): Promise<Farm> {
    const farmer = await this.farmerRepo.findOneBy({ id: dto.farmerId });
    if (!farmer) {
      throw new Error('Farmer not found');
    }
    const crops = await this.cropRepo.findByIds(dto.cropIds);

    const farm = this.farmRepo.create({
      name: dto.name,
      city: dto.city,
      state: dto.state,
      totalArea: dto.totalArea,
      agriculturalArea: dto.agriculturalArea,
      vegetationArea: dto.vegetationArea,
      farmer,
      crops,
    });

    return this.farmRepo.save(farm);
  }

  // métodos de relatório virão aqui futuramente
}
