import { randomUUID } from 'crypto';
import { Crop } from '../../domain/entities/crop.entity';
import { ICropRepository } from '../../domain/repositories/crop.repository.interface';
import { CreateCropDto } from '../dtos/create-crop.dto';

export class CreateCropUseCase {
  constructor(private readonly cropRepository: ICropRepository) {}

  async execute(input: CreateCropDto): Promise<Crop> {
    const crop = new Crop(randomUUID(), input.name);
    return this.cropRepository.create(crop);
  }
}
