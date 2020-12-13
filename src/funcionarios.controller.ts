import {
  Body, Controller, Delete, Get, Param, Post, Put
} from '@nestjs/common';
import { Funcionario } from './Funcionarios/funcionario.model';
import { FuncionariosService } from './Funcionarios/funcionarios.service';

@Controller('usuarios')
export class FuncionariosController {
  constructor(private funcionariosService: FuncionariosService) {}

  @Get()
  async retornar(): Promise<Funcionario[]> {
    return this.funcionariosService.obterTodos();
  }

  @Post('/autenticar')
  async autenticarUsuario(@Body() funcionario: Funcionario) {
    return this.funcionariosService.autenticar(funcionario);
  }

  @Post('/cadastro')
  async cadastrar(@Body() funcionario: Funcionario) {
    this.funcionariosService.cadastrar(funcionario);
  }
}
