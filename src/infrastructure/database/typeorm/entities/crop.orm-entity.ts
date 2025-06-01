import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crops')
export class CropOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
