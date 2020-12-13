import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Alcunha } from "src/Atribuicoes/alcunha.model";
import { Funcionario } from "./funcionario.model";

@Injectable()
export class FuncionariosService {
    
    constructor(
        @InjectModel(Funcionario)
        private funcionarioModel: typeof Funcionario
    ){}

    async obterTodos(): Promise<Funcionario[]> {
        return this.funcionarioModel.findAll();
    }

    async autenticar(funcionario : Funcionario): Promise<Funcionario> {
        return this.funcionarioModel.findOne({ where: { email: funcionario.email, senha: funcionario.senha } });
    }

    async cadastrar(funcionario: Funcionario) {
        this.funcionarioModel.create(funcionario);
    }

    async atribuirBadge(alcunha: Alcunha) {
        this.funcionarioModel;
    }

    async atribuirAlcunha(funcionario: Funcionario) {
        this.funcionarioModel.create(funcionario);
    }

    async exibirBadge(funcionario: Funcionario) {
        this.funcionarioModel.create(funcionario);
    }
    
    async exibirAlcunha(funcionario: Funcionario) {
        this.funcionarioModel.create(funcionario);
    }

}