import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosController } from './funcionarios.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcionario } from './Funcionarios/funcionario.model';
import { Tarefa } from './Tarefas/tarefa.model';
import { TarefasService } from './Tarefas/tarefas.service';
import { TarefasController } from './tarefas.controller';
import { FuncionariosService } from './Funcionarios/funcionarios.service';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'gamificacao.cogvirr36b5r.sa-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'admin123',
      database: 'gamificacao',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Funcionario, Tarefa])
  ],
  controllers: [AppController, FuncionariosController, TarefasController],
  providers: [AppService, FuncionariosService, TarefasService],
})
export class AppModule {}
