import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  taskCompleted: TaskModel[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.tasksClose();
  }

  tasksClose(): void {
    this.service.tasksClose().subscribe(
      response => {
        this.taskCompleted = response
      }

    )
  }

  deletar(id:string): void {
    this.service.delete(id).subscribe(
        response => {
          this.service.mensagem(`Tarefa excluida com sucesso!`);
          this.ngOnInit()
        }, error => {
          this.service.mensagem(`Falha ao excluir tarefa.`);
        })
  }

}
