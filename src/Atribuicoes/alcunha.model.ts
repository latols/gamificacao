import { Funcionario } from 'src/Funcionarios/funcionario.model';

export class Alcunha {
  tipo: boolean;
  nome: string;
  exibirAlcunha: boolean;

  atribuirAlcunha(funcionario: Funcionario): void {
    if (funcionario.tarefasRealizadas >= 2) {
      this.nome = 'Porreta';
    } else if (
      funcionario.ajudasRealizadas >= 1 &&
      funcionario.tarefasRealizadas >= 2
    ) {
      this.nome = 'Mestre das Tarefas';
    } else if (
      funcionario.tarefasAtrasadas == 0 &&
      funcionario.tarefasRealizadas >= 3
    ) {
      this.nome = 'Polvo Maravilha';
    } else if (
      funcionario.tarefasAtrasadas >= 3 &&
      funcionario.tarefasRealizadas >= 3
    ) {
      this.nome = 'Polvo Olho Grande';
    } else if (
      funcionario.tarefasAtrasadas >= 1 &&
      funcionario.tarefasRealizadas >= 1
    ) {
      this.nome = 'Atrasilde';
    } else if (
      funcionario.ajudasRealizadas >= 1 &&
      funcionario.tarefasRealizadas >= 0
    ) {
      this.nome = 'Papo Furado';
    } else if (
      funcionario.numTarefas >= 1 &&
      funcionario.tarefasRealizadas >= 0
    ) {
      this.nome = 'Sem noção do perigo';
    } else if (funcionario.tarefasAtrasadas == 0) {
      this.nome = 'Do balacobaco';
    }
  }

  getTipo(): boolean {
    return true;
  }

  getNome(): string {
    return this.nome;
  }

  public getExibirAlcunha(): boolean {
    return this.exibirAlcunha;
  }

  private setExibirAlcunha(exibirAlcunha: boolean): void {
    this.exibirAlcunha = exibirAlcunha;
  }

  private setTipo(tipo: boolean): void {
    this.tipo = tipo;
  }

  private setNome(nome: string): void {
    this.nome = nome;
  }
}
