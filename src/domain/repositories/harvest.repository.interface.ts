import { Harvest } from '../entities/harvest.entity';
export interface IHarvestRepository {
  create(harvest: Harvest): Promise<Harvest>;
  findById(id: string): Promise<Harvest | null>;
  findByFarmId(farmId: string): Promise<Harvest[]>; // NOVO MÉTODO
}
