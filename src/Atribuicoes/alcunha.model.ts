import { Column, DataType, Table } from 'sequelize-typescript';

@Table
export class Alcunha {
  @Column({
    type: DataType.STRING,
    allowNull: true, 
  })
  nome: string;
  
  @Column({
    type: DataType.DECIMAL,
    allowNull: true, 
  })
  codigo: number;
}
