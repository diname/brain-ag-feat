import { randomUUID } from 'crypto';
import { Crop } from '../../domain/entities/crop.entity';
import { Harvest } from '../../domain/entities/harvest.entity';
import { ICropRepository } from '../../domain/repositories/crop.repository.interface';
import { IHarvestRepository } from '../../domain/repositories/harvest.repository.interface';
import { CreateHarvestDto } from '../dtos/create-harvest.dto';

export class CreateHarvestUseCase {
  constructor(
    private readonly harvestRepository: IHarvestRepository,
    private readonly cropRepository: ICropRepository,
  ) {}

  async execute(input: CreateHarvestDto): Promise<Harvest> {
    const crops: Crop[] = [];
    for (const cropId of input.cropIds) {
      const crop = await this.cropRepository.findById(cropId);
      if (!crop) throw new Error(`Cultura com ID ${cropId} não encontrada`);
      crops.push(crop);
    }

    const harvest = new Harvest(randomUUID(), input.year, input.farmId, crops);
    return this.harvestRepository.create(harvest);
  }
}
