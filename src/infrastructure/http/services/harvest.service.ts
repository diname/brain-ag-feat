import { Injectable } from '@nestjs/common';
import { CreateHarvestDto } from '../../../application/dtos/create-harvest.dto';
import { CreateHarvestUseCase } from '../../../application/use-cases/create-harvest.use-case';
import { GetHarvestsByFarmIdUseCase } from '../../../application/use-cases/get-harvests-by-farm-id.use-case';

@Injectable()
export class HarvestService {
  constructor(
    private readonly createHarvestUseCase: CreateHarvestUseCase,
    private readonly getHarvestsByFarmIdUseCase: GetHarvestsByFarmIdUseCase,
  ) {}

  async create(input: CreateHarvestDto) {
    return this.createHarvestUseCase.execute(input);
  }

  async getByFarmId(farmId: string) {
    return this.getHarvestsByFarmIdUseCase.execute(farmId);
  }
}
