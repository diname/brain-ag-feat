import { Injectable } from '@nestjs/common';
import { Harvest } from '../../domain/entities/harvest.entity';
import { IHarvestRepository } from '../../domain/repositories/harvest.repository.interface';

@Injectable()
export class GetHarvestsByFarmIdUseCase {
  constructor(private readonly harvestRepository: IHarvestRepository) {}

  async execute(farmId: string): Promise<Harvest[]> {
    return this.harvestRepository.findByFarmId(farmId);
  }
}
