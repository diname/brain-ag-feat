import { Crop } from '../entities/crop.entity';

export interface ICropRepository {
  create(crop: Crop): Promise<Crop>;
  findById(id: string): Promise<Crop | null>;
}
