import { EntityRepository, Repository } from 'typeorm';
import { Crop } from '../entities/crop.entity';

@EntityRepository(Crop)
export class CropRepository extends Repository<Crop> {}
