import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { Alcunha } from "src/Atribuicoes/alcunha.model";
import { Funcionario } from "src/Funcionarios/funcionario.model";
import { Badge } from "./badge.model";

@Injectable()
export class BadgeService {
    
    constructor(
        @InjectModel(Badge)
        private funcionarioModel: typeof Funcionario
    ){}

  atribuirBadge(funcionario: Funcionario): void {
    if (funcionario.tarefasRealizadas >= 3) {
      funcionario.badge.push(1);
    }
    if (funcionario.tarefasRealizadas == 2) {
      funcionario.badge.push(2);
    }
    if (funcionario.ajudasRealizadas == 2) {
      funcionario.badge.push(3);
    }
    if (funcionario.ajudasRealizadas >= 3) {
      funcionario.badge.push(4);
    }
    if (funcionario.tarefasRealizadas >= 3 && funcionario.ajudasRealizadas >= 3) {
      funcionario.badge.push(5);
    }
  }
  
}
