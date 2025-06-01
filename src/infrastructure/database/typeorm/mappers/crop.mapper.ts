import { Crop } from '../../../../domain/entities/crop.entity';
import { CropOrmEntity } from '../entities/crop.orm-entity';

export class CropMapper {
  static toDomain(): Crop {
    return new Crop();
  }

  static toOrm(domain: Crop): CropOrmEntity {
    const orm = new CropOrmEntity();
    orm.id = domain.id;
    orm.name = domain.name;
    return orm;
  }
}
