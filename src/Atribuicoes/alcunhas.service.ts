import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Alcunha } from "src/Atribuicoes/alcunha.model";
import { Funcionario } from "src/Funcionarios/funcionario.model";

@Injectable()
export class AlcunhasService {
    
    constructor(
        @InjectModel(Alcunha)
        private alcunhaModel: typeof Alcunha
    ){}

    async atribuirAlcunha(funcionario: Funcionario) {
		if (funcionario.tarefasRealizadas >= 2) {
            funcionario.alcunha = 1;
		} else if (
            funcionario.ajudasRealizadas >= 1 &&
            funcionario.tarefasRealizadas >= 2
		) {
		  funcionario.alcunha = 2;
		} else if (
            funcionario.tarefasAtrasadas == 0 &&
            funcionario.tarefasRealizadas >= 3
		) {
		  funcionario.alcunha = 3;
		} else if (
		  funcionario.tarefasAtrasadas >= 3 &&
		  funcionario.tarefasRealizadas >= 3
		) {
		  funcionario.alcunha = 4;
		} else if (
		  funcionario.tarefasAtrasadas >= 1 &&
		  funcionario.tarefasRealizadas >= 1
		) {
		  funcionario.alcunha = 5;
		} else if (
		  funcionario.ajudasRealizadas >= 1 &&
		  funcionario.tarefasRealizadas >= 0
		) {
		  funcionario.alcunha = 6;
		} else if (
		  funcionario.numTarefas >= 1 &&
		  funcionario.tarefasRealizadas >= 0
		) {
		  funcionario.alcunha = 7;
		} else if (funcionario.tarefasAtrasadas == 0) {
		  funcionario.alcunha = 8;
        }
    }

}