import { Farm } from '../../../../domain/entities/farm.entity';
import { FarmOrmEntity } from '../entities/farm.orm-entity';

export class FarmMapper {
  static toDomain(orm: FarmOrmEntity): Farm {
    const farm = new Farm();
    farm.id = orm.id;
    farm.name = orm.name;
    farm.city = orm.city;
    farm.state = orm.state;
    farm.totalArea = orm.totalArea;
    farm.agriculturalArea = orm.agriculturalArea;
    farm.vegetationArea = orm.vegetationArea;
    farm.farmer = {
      id: orm.farmerId,
      document: '',
      name: '',
      farms: [],
    };
    return farm;
  }

  static toOrm(domain: Farm): FarmOrmEntity {
    const orm = new FarmOrmEntity();
    orm.id = domain.id;
    orm.name = domain.name;
    orm.city = domain.city;
    orm.state = domain.state;
    orm.totalArea = domain.totalArea;
    orm.agriculturalArea = domain.agriculturalArea;
    orm.vegetationArea = domain.vegetationArea;
    orm.farmerId = domain.farmer?.id;
    return orm;
  }
}
