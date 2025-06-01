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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Agricultor } from '../../domain/entities/agricultor.entity';
@ApiTags('agricultores')
@Controller('agricultores')
export class AgricultorController {
  constructor(
    private readonly criarUseCase: CriarAgricultorUseCase,
    private readonly atualizarUseCase: AtualizarAgricultorUseCase,
    private readonly removerUseCase: RemoverAgricultorUseCase,
    private readonly buscarTodosUseCase: BuscarTodosAgricultoresUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um agricultor' })
  @ApiResponse({ status: 200, description: 'Agricultor criado com sucesso.' })
  async criar(@Body() dto: Agricultor): Promise<Agricultor> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar um agricultor' })
  @ApiResponse({
    status: 200,
    description: 'Agricultor atualizado com sucesso.',
  })
  async atualizar(@Body() dto: Agricultor): Promise<Agricultor> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um agricultor' })
  @ApiResponse({ status: 200, description: 'Agricultor removido com sucesso.' })
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os agricultores' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  async buscarTodos(): Promise<Agricultor[]> {
    return this.buscarTodosUseCase.execute();
  }
}
