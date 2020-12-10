import { Alcunha } from "src/Atribuicoes/alcunha.model"
import { Tarefa } from "src/Tarefas/tarefa.model"
import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table
export class Funcionario extends Model<Funcionario> {

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    senha: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: true
    })
    role: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    alcunha: Alcunha;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    badge: Badge[];

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    tarefa: Tarefa[];
        
}