import { Injectable } from '@nestjs/common';
import { CreateCropDto } from '../../../application/dtos/create-crop.dto';
import { CreateCropUseCase } from '../../../application/use-cases/create-crop.use-case';

@Injectable()
export class CropService {
  constructor(private readonly createCropUseCase: CreateCropUseCase) {}

  async create(input: CreateCropDto) {
    return this.createCropUseCase.execute(input);
  }
}
