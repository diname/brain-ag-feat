// src/infrastructure/database/typeorm/entities/farmer.orm-entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FarmOrmEntity } from './farm.orm-entity';

@Entity('farmers')
export class FarmerOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  document: string;

  @Column()
  name: string;

  @OneToMany(() => FarmOrmEntity, (farm) => farm.farmer)
  farms: FarmOrmEntity[];
}
