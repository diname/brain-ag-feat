import { AtualizarFazendaUseCase } from '@Application/use-cases/fazenda/atualiza-fazenda.use-case';
import { BuscarTodasFazendasUseCase } from '@Application/use-cases/fazenda/busca-fazenda.use-case';
import { CriarFazendaUseCase } from '@Application/use-cases/fazenda/cria-fazenda.use-case';
import { RemoverFazendaUseCase } from '@Application/use-cases/fazenda/deleta-fazenda.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Fazenda } from '../../domain/entities/fazenda.entity';

@Controller('fazendas')
export class FazendaController {
  constructor(
    private readonly criarUseCase: CriarFazendaUseCase,
    private readonly atualizarUseCase: AtualizarFazendaUseCase,
    private readonly removerUseCase: RemoverFazendaUseCase,
    private readonly buscarTodasUseCase: BuscarTodasFazendasUseCase,
  ) {}

  @Post()
  async criar(@Body() dto: Fazenda): Promise<Fazenda> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  async atualizar(@Body() dto: Fazenda): Promise<Fazenda> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  async buscarTodas(): Promise<Fazenda[]> {
    return this.buscarTodasUseCase.execute();
  }
}
