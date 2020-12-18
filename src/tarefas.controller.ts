import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Tarefa } from "./Tarefas/tarefa.model";
import { TarefasService } from "./Tarefas/tarefas.service";

@Controller('tarefas')
    export class TarefasController {

        constructor(private tarefaService: TarefasService){

        }

        @Get('/funcionario/:userId')
        async retornarTarefaFuncionario(@Param('userId') id): Promise<Tarefa[]> {
            return this.tarefaService.exibirTarefas(id);
        }

        @Get(':tarefaId')
        async retornar(@Param('tarefaId') id): Promise<Tarefa> {
            return this.tarefaService.exibirTarefa(id);
        }

        @Post()
        async criar(@Body() tarefa: Tarefa) {
            this.tarefaService.criarTarefa(tarefa);
        }

        @Put(':tarefaId')
        async gerenciar(@Param('tarefaId') id, @Body() tarefa: Tarefa) {
            this.tarefaService.gerenciarTarefa(id, tarefa);
        }
        
        @Put('concluir/:tarefaId')
        async concluir(@Param('tarefaId') id, @Body() tarefa: Tarefa) {
            this.tarefaService.concluirTarefa(id, tarefa);
        }

}