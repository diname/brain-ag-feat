import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Farm } from './farm.entity';

@Entity()
export class Farmer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  document: string;

  @Column()
  name: string;

  @OneToMany(() => Farm, (farm) => farm.farmer)
  farms: Farm[];
}
