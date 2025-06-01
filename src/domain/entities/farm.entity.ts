import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Farmer } from './farmer.entity';
import { Crop } from './crop.entity';

@Entity()
export class Farm {
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

  @ManyToOne(() => Farmer, (farmer) => farmer.farms)
  farmer: Farmer;

  @ManyToMany(() => Crop, (crop) => crop.farms)
  @JoinTable()
  crops: Crop[];
}
