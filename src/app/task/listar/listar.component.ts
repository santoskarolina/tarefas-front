import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NovoComponent} from "../novo/novo.component";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tasks : TaskModel[] = [];

  constructor(
      private service: TodoService,
      private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tasksOpen();
  }

  tasksOpen(): void {
    this.service.tasksOpen().subscribe(
      resposne => {
        this.tasks = resposne;
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

  concluir(id:string, task: any):void {
    this.service.fineshed(id, task).subscribe(
        response => {
          this.service.mensagem(`Tarefa concluída com sucesso!`);
          this.ngOnInit()
        }, error => {
            console.log(error)
          this.service.mensagem(`Falha ao concluir tarefa.`);
        })
  }

  newTask(){
    const dialogRef = this.dialog.open(NovoComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }


}
