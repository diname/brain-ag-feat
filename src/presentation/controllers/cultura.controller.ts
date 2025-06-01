import { AtualizarCulturaUseCase } from '@Application/use-cases/cultura/atualiza-cultura.use-case';
import { BuscarTodasCulturasUseCase } from '@Application/use-cases/cultura/busca-cultura.use-case';
import { CriarCulturaUseCase } from '@Application/use-cases/cultura/cria-cultura.use-case';
import { RemoverCulturaUseCase } from '@Application/use-cases/cultura/deleta-cultura.use-case';
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
import { Cultura } from '../../domain/entities/cultura.entity';

@ApiTags('culturas')
@Controller('culturas')
export class CulturaController {
  constructor(
    private readonly criarUseCase: CriarCulturaUseCase,
    private readonly atualizarUseCase: AtualizarCulturaUseCase,
    private readonly removerUseCase: RemoverCulturaUseCase,
    private readonly buscarTodasUseCase: BuscarTodasCulturasUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma cultura' })
  @ApiResponse({ status: 200, description: 'Cultura criado com sucesso.' })
  async criar(@Body() dto: Cultura): Promise<Cultura> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar uma cultura' })
  @ApiResponse({ status: 200, description: 'Cultura atualizado com sucesso.' })
  async atualizar(@Body() dto: Cultura): Promise<Cultura> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma cultura' })
  @ApiResponse({ status: 200, description: 'Cultura removido com sucesso.' })
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as culturas' })
  @ApiResponse({ status: 200, description: 'Culturas listadas com sucesso.' })
  async buscarTodas(): Promise<Cultura[]> {
    return this.buscarTodasUseCase.execute();
  }
}
