import { Farmer } from '../entities/farmer.entity';

export interface IFarmerRepository {
  create(farmer: Farmer): Promise<Farmer>;
  findById(id: string): Promise<Farmer | null>;
  update(farmer: Farmer): Promise<Farmer>;
  delete(id: string): Promise<void>;
}
