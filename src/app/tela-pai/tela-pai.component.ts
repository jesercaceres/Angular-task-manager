import { Component } from '@angular/core';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tela-pai',
  templateUrl: './tela-pai.component.html',
  styleUrls: ['./tela-pai.component.css']
})
export class TelaPaiComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Tarefa 1', concluida: false },
    { descricao: 'Tarefa 2', concluida: true },
    { descricao: 'Tarefa 3', concluida: false },
    { descricao: 'Tarefa 4', concluida: true },
    { descricao: 'Tarefa 5', concluida: false }
  ];

  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}