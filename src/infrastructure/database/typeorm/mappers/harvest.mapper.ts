import { Crop } from '../../../../domain/entities/crop.entity';
import { Harvest } from '../../../../domain/entities/harvest.entity';
import { HarvestOrmEntity } from '../entities/harvest.orm-entity';
import { CropMapper } from './crop.mapper'; // se já existir

export class HarvestMapper {
  static toDomain(orm: HarvestOrmEntity): Harvest {
    const crops: Crop[] = orm.crops?.map(() => CropMapper.toDomain()) ?? [];
    return new Harvest(orm.id, orm.year, orm.farmId, crops);
  }

  static toOrm(domain: Harvest): HarvestOrmEntity {
    const orm = new HarvestOrmEntity();
    orm.id = domain.id;
    orm.year = domain.year;
    orm.farmId = domain.farmId;
    orm.crops = domain.crops?.map((crop) => CropMapper.toOrm(crop)) ?? [];
    return orm;
  }
}
