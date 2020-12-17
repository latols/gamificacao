import { Table, Model, Column, DataType } from "sequelize-typescript"
import { Funcionario } from "src/Funcionarios/funcionario.model";

@Table
export class Tarefa extends Model<Tarefa>{

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    titulo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descricao: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    responsavelTarefa: number;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    dataConclusao: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    prazoLimite: Date;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    integrantes: Funcionario[];

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    resumo: string;
    
}