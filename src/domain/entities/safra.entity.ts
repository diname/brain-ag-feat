import { CulturaEntity } from './cultura.entity';

export class SafraEntity {
  constructor(
    public id: string,
    public year: number,
    public farmId: string,
    public crops: CulturaEntity[] = [],
  ) {}
}
