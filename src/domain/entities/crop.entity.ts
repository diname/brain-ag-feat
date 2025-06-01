import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Farm } from './farm.entity';

@Entity()
export class Crop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Farm, (farm) => farm.crops)
  farms: Farm[];
}
