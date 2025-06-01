import { Farmer } from '../../../../domain/entities/farmer.entity';
import { FarmerOrmEntity } from '../entities/farmer.orm-entity';

export class FarmerMapper {
  static toDomain(orm: FarmerOrmEntity): Farmer {
    const farmer = new Farmer();
    farmer.id = orm.id;
    farmer.document = orm.document;
    farmer.name = orm.name;
    return farmer;
  }

  static toOrm(domain: Farmer): FarmerOrmEntity {
    const orm = new FarmerOrmEntity();
    orm.id = domain.id;
    orm.name = domain.name;
    orm.document = domain.document;
    return orm;
  }
}
