import { Funcionario } from 'src/Funcionarios/funcionario.model';

export class Badge {
  imagem: string;
  exibirBadge: boolean;

  atribuirBadge(funcionario: Funcionario): void {
    if (funcionario.tarefasRealizadas >= 3) {
      this.imagem = 'MestreDosMagos.jpg';
    }
    if (funcionario.tarefasRealizadas == 2) {
      this.imagem = 'Palmas.jpg';
    }
    if (funcionario.ajudasRealizadas == 2) {
      this.imagem = 'Polegar.jpg';
    }
    if (funcionario.ajudasRealizadas >= 3) {
      this.imagem = 'Coracao.jpg';
    }
    if (funcionario.tarefasRealizadas >= 3 && funcionario.ajudasRealizadas >= 3) {
      this.imagem = 'Champignon.jpg';
    }
  }

  public getImagem(): string {
    return this.imagem;
  }

  public getExibirBadge(): boolean {
    return this.exibirBadge;
  }

  private setImagem(imagem: string): void {
    this.imagem = imagem;
  }

  private setExibirBadge(exibirBadge: boolean): void {
    this.exibirBadge = exibirBadge;
  }
}
