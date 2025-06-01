// src/presentation/controllers/agricultor.controller.ts
import { AtualizarAgricultorUseCase } from '@Application/use-cases/agricultor/atualiza-agricultor.use-case';
import { BuscarTodosAgricultoresUseCase } from '@Application/use-cases/agricultor/busca-agricultor.use-case';
import { CriarAgricultorUseCase } from '@Application/use-cases/agricultor/cria-agricultor.use-case';
import { RemoverAgricultorUseCase } from '@Application/use-cases/agricultor/deleta-agricultor.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Agricultor } from '../../domain/entities/agricultor.entity';

@Controller('agricultores')
export class AgricultorController {
  constructor(
    private readonly criarUseCase: CriarAgricultorUseCase,
    private readonly atualizarUseCase: AtualizarAgricultorUseCase,
    private readonly removerUseCase: RemoverAgricultorUseCase,
    private readonly buscarTodosUseCase: BuscarTodosAgricultoresUseCase,
  ) {}

  @Post()
  async criar(@Body() dto: Agricultor): Promise<Agricultor> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  async atualizar(@Body() dto: Agricultor): Promise<Agricultor> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  async buscarTodos(): Promise<Agricultor[]> {
    return this.buscarTodosUseCase.execute();
  }
}
