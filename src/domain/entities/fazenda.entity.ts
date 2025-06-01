import { SafraEntity } from './safra.entity';

export class FazendaEntity {
  constructor(
    public id: string,
    public name: string,
    public city: string,
    public state: string,
    public totalArea: number,
    public agriculturalArea: number,
    public vegetationArea: number,
    public farmerId: string,
    public harvests: SafraEntity[] = [],
  ) {}
}
