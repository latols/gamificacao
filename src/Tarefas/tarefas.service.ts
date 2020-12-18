import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Funcionario } from "src/Funcionarios/funcionario.model";
import { Tarefa } from "./tarefa.model";

@Injectable()
export class TarefasService {
   
    constructor(
        @InjectModel(Tarefa)
        private tarefaModel: typeof Tarefa,
        @InjectModel(Funcionario)
        private funcionarioModel: typeof Funcionario,
    ){}

    async criarTarefa(tarefa: Tarefa) {
        this.tarefaModel.create(tarefa);
    }

    async gerenciarTarefa(id: number, tarefa: Tarefa): Promise<[number, Tarefa[]]> {
        return this.tarefaModel.update(tarefa, {
            where: {
                id: id
            }
        });
    }

    async concluirTarefa(id: number, tarefa: Tarefa): Promise<[number, Tarefa[]]> {
        const tarefaRecuperada = this.tarefaModel.findOne({ where: { id: id } });
        const funcionario = this.funcionarioModel.findOne({ where: { id: (await tarefaRecuperada).responsavelTarefa } });;
        (await funcionario).tarefasRealizadas += 1;
        //console.log(funcionario);
        this.funcionarioModel.update(funcionario, {
            where: {
                email: (await funcionario).email
            }
        })
        //tarefasRealizadas = tarefa.responsavelTarefa.tarefasRealizadas + 1
        return this.tarefaModel.update(tarefa, {
            where: {
                id: id
            }
        });
    }

    async exibirTarefas(id : number): Promise<Tarefa[]> {
        return this.tarefaModel.findAll( {where: {
            responsavelTarefa: id
        }});
    }

    async exibirTarefa(id : number): Promise<Tarefa> {
        return this.tarefaModel.findByPk(id);
    }

}