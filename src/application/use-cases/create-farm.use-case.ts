import { randomUUID } from 'crypto';
import { Farm } from '../../domain/entities/farm.entity';
import { IFarmRepository } from '../../domain/repositories/farm.repository.interface';
import { isValidFarmArea } from '../../shared/utils/area-validator';
import { CreateFarmDto } from '../dtos/create-farm.dto';

export class CreateFarmUseCase {
  constructor(private readonly farmRepository: IFarmRepository) {}

  async execute(input: CreateFarmDto): Promise<Farm> {
    if (
      !isValidFarmArea(
        input.totalArea,
        input.agriculturalArea,
        input.vegetationArea,
      )
    ) {
      throw new Error(
        'Área total da fazenda é menor que a soma das áreas agricultável e de vegetação',
      );
    }

    const farm = new Farm(
      randomUUID(),
      input.name,
      input.city,
      input.state,
      input.totalArea,
      input.agriculturalArea,
      input.vegetationArea,
      input.farmerId,
    );

    return this.farmRepository.create(farm);
  }
}
