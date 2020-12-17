import { Alcunha } from 'src/Atribuicoes/alcunha.model';
import { Tarefa } from 'src/Tarefas/tarefa.model';
import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Badge } from 'src/Atribuicoes/badge.model';

@Table
export class Funcionario extends Model<Funcionario> {
  @Column({
    type: DataType.DECIMAL,
    allowNull: false, //iniciar com 0
  })
  ajudasRealizadas: number;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true
  })
  exibirGamificacao: boolean;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false, //iniciar com 0
  })
  numTarefas: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false, //iniciar com 0
  })
  tarefasRealizadas: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false, //iniciar com 0
  })
  tarefasAtrasadas: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  senha: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  role: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  alcunha: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  badge: number[];
}
