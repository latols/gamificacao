import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Funcionario } from "./funcionario.model";

@Injectable()
export class FuncionariosService {
    
    constructor(
        @InjectModel(Funcionario)
        private funcionarioModel: typeof Funcionario
    ){}

    async autenticar(funcionario : Funcionario): Promise<Funcionario> {
        return this.funcionarioModel.findOne({ where: { email: funcionario.email, senha: funcionario.senha } });
    }

    async cadastrar(funcionario: Funcionario) {
        this.funcionarioModel.create(funcionario);
    }

    async desabilitarGamificacao(funcionario: Funcionario) {
        //this.funcionarioModel.update(funcionario);
    }

    async obterTodos(): Promise<Funcionario[]> {
        return this.funcionarioModel.findAll();
    }

}