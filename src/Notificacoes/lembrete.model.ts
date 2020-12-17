import { Tarefa } from 'src/Tarefas/tarefa.model';
import moment from 'moment';

export class Lembrete {
  exibirLembrete = false;
  mensagem: string;

  definirLembrete(tarefa: Tarefa): void {
    const dataHoje = moment(new Date());
    const dif = moment.duration(dataHoje.diff(tarefa.prazoLimite));
    const difDias = dif.asDays();
    if (difDias <= 7) {
      this.exibirLembrete = true;
      this.mensagem =
        'Faltam' +
        difDias +
        'para o prazo final da sua tarefa: ' +
        tarefa.titulo;
    }
    if (difDias < 0) {
      this.exibirLembrete = true;
      this.mensagem =
        'A tarefa' + tarefa.titulo + 'está atrasada' + difDias + 'dias';
    }
  }
}
