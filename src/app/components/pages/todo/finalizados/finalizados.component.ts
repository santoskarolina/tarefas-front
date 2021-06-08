import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  todoFinalizado: TodoModel[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getAllFinalizados();
  }

  getAllFinalizados(): void {
    this.service.getAllFinalizados().subscribe(
      response => {
        this.todoFinalizado = response
      }
      
    )
  }

}
