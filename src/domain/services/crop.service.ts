import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crop } from 'src/domain/entities/crop.entity';
import { CropRepository } from 'src/domain/repositories/crop.repository.interface';

@Injectable()
export class CropService {
  constructor(
    @InjectRepository(CropRepository)
    private readonly cropRepo: CropRepository,
  ) {}

  async createCrop(name: string): Promise<Crop> {
    const crop = this.cropRepo.create({ name });
    return this.cropRepo.save(crop);
  }
}
