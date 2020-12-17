import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Badge extends Model<Badge> {

  @Column({
    type: DataType.STRING,
    allowNull: true, 
  })
  nome: string;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: true, 
  })
  codigo: number;
  
}
