import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from '../../../application/dtos/create-farmer.dto';
import { CreateFarmerUseCase } from '../../../application/use-cases/create-farmer.use-case';

@Injectable()
export class FarmerService {
  constructor(private readonly createFarmerUseCase: CreateFarmerUseCase) {}

  async create(input: CreateFarmerDto) {
    return this.createFarmerUseCase.execute(input);
  }
}
