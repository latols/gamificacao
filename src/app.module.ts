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
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
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
