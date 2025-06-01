import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmer } from 'src/domain/entities/farmer.entity';
import { FarmerRepository } from 'src/domain/repositories/farmer.repository';

@Injectable()
export class FarmerService {
  constructor(
    @InjectRepository(FarmerRepository)
    private readonly farmerRepo: FarmerRepository,
  ) {}

  async createFarmer(document: string, name: string): Promise<Farmer> {
    const farmer = this.farmerRepo.create({ document, name });
    return this.farmerRepo.save(farmer);
  }
}
