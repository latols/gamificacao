import { Funcionario } from "src/Funcionarios/funcionario.model"
import { Tarefa } from "./tarefa.model"

export class HistoricoTarefa{
    Funcionario: Funcionario
    concluidas: number
    ativas: number
    atrasadas: number
    tarefa: Tarefa[]
   
      
  }
  