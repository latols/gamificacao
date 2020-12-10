import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Tarefa } from "./tarefa.model";

@Injectable()
export class TarefasService {
    
    constructor(
        @InjectModel(Tarefa)
        private tarefaModel: typeof Tarefa
    ){}

    async criarTarefa(tarefa: Tarefa) {
        this.tarefaModel.create(tarefa);
    }

    async gerenciarTarefa(tarefa: Tarefa): Promise<[number, Tarefa[]]> {
        return this.tarefaModel.update(tarefa, {
            where: {
                id: tarefa.id
            }
        });
    }

    async concluirTarefa(tarefa: Tarefa): Promise<[number, Tarefa[]]> {
        return this.tarefaModel.update(tarefa, {
            where: {
                id: tarefa.id
            }
        });
    }

    async exibirTarefas(): Promise<Tarefa[]> {
        return this.tarefaModel.findAll();
    }

}