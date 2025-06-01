import { FazendaEntity } from './fazenda.entity';

export class ProdutorEntity {
  constructor(
    public id: string,
    public document: string,
    public name: string,
    public farms: FazendaEntity[] = [],
  ) {}
}
