import { Funcionario } from "src/Funcionarios/funcionario.model";
import { Tarefa } from "src/Tarefas/tarefa.model";

export class Alcunha {
    tipo: boolean
    nome: String
   
      atribuirAlcunha(tarefa: Tarefa, funcionario: Funcionario): void{
          
      }
  
      getTipo(): boolean{
        return true;
      }
      
      getNome(): String{
        return this.nome;
      }
      
      private setTipo(tipo: boolean): void{
        this.tipo = tipo;
      }
      
      private setNome(nome: String): void{
        this.nome = nome;
      }
  }
  