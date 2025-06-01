import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FarmerOrmEntity } from './farmer.orm-entity';
import { HarvestOrmEntity } from './harvest.orm-entity';

@Entity('farms')
export class FarmOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column('float')
  totalArea: number;

  @Column('float')
  agriculturalArea: number;

  @Column('float')
  vegetationArea: number;

  @ManyToOne(() => FarmerOrmEntity, (farmer) => farmer.farms)
  farmer: FarmerOrmEntity;

  @Column()
  farmerId: string;

  @OneToMany(() => HarvestOrmEntity, (harvest) => harvest.farm)
  harvests: HarvestOrmEntity[];
}
