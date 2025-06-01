import { Cultura } from '@Domain/entities/cultura.entity';
import { CulturaRepository } from '@Domain/repositories/cultura.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AtualizarCulturaUseCase {
  constructor(private readonly repo: CulturaRepository) {}

  async execute(cultura: Cultura): Promise<Cultura> {
    return await this.repo.atualizar(cultura);
  }
}
