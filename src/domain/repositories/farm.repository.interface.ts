import { Farm } from '../entities/farm.entity';

export interface IFarmRepository {
  create(farm: Farm): Promise<Farm>;
  findById(id: string): Promise<Farm | null>;
  update(farm: Farm): Promise<Farm>;
  delete(id: string): Promise<void>;
  findByFarmerId(farmerId: string): Promise<Farm[]>;
}
