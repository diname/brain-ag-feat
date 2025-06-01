import { Injectable } from '@nestjs/common';
import { Farm } from '../../domain/entities/farm.entity';
import { IFarmRepository } from '../../domain/repositories/farm.repository.interface';

@Injectable()
export class GetFarmsByFarmerIdUseCase {
  constructor(private readonly farmRepository: IFarmRepository) {}

  async execute(farmerId: string): Promise<Farm[]> {
    return this.farmRepository.findByFarmerId(farmerId);
  }
}
