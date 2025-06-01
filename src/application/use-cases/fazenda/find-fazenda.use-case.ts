import { FazendaDto } from '@Application/dtos/fazenda.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindFazendaUseCase {
  constructor() {}

  async execute(): Promise<FazendaDto[]> {
    return { message: 'Listar todas as fazendas' };
  }
}
