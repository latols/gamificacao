import { Table, Model, Column, DataType } from "sequelize-typescript"

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
        type: DataType.STRING,
        allowNull: false
    })
    responsavelTarefa: string;

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
    integrantes: string[];

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    resumo: string;
    
}