import { Fazenda } from '../entities/fazenda.entity';

export interface FazendaRepository {
  criar(fazenda: Fazenda): Promise<Fazenda>;
  atualizar(fazenda: Fazenda): Promise<Fazenda>;
  remover(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Fazenda | null>;
  buscarTodos(): Promise<Fazenda[]>;
}
