import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CropOrmEntity } from './crop.orm-entity';
import { FarmOrmEntity } from './farm.orm-entity';

@Entity('harvests')
export class HarvestOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: string;

  @ManyToOne(() => FarmOrmEntity, (farm) => farm.harvests)
  farm: FarmOrmEntity;

  @Column()
  farmId: string;

  @ManyToMany(() => CropOrmEntity)
  @JoinTable()
  crops: CropOrmEntity[];
}
