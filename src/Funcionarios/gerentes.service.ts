import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Alcunha } from "src/Atribuicoes/alcunha.model";
import { Funcionario } from "./funcionario.model";

@Injectable()
export class GerentesService {
    
    constructor(
        @InjectModel(Funcionario)
        private funcionarioModel: typeof Funcionario
    ){}

    async zerar(funcionario : Funcionario): Promise<Funcionario> {
        return this.funcionarioModel.findOne({ where: { email: funcionario.email, senha: funcionario.senha } });
    }
}