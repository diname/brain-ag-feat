import { Injectable } from '@nestjs/common';
import { CreateFarmDto } from '../../../application/dtos/create-farm.dto';
import { CreateFarmUseCase } from '../../../application/use-cases/create-farm.use-case';
import { GetFarmsByFarmerIdUseCase } from '../../../application/use-cases/get-farms-by-farmer-id.use-case';

@Injectable()
export class FarmService {
  constructor(
    private readonly createFarmUseCase: CreateFarmUseCase,
    private readonly getFarmsByFarmerIdUseCase: GetFarmsByFarmerIdUseCase,
  ) {}

  async create(input: CreateFarmDto) {
    return this.createFarmUseCase.execute(input);
  }

  async getByFarmerId(farmerId: string) {
    return this.getFarmsByFarmerIdUseCase.execute(farmerId);
  }
}
