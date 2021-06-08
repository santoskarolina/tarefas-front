import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  todos : TodoModel[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.service.getAll().subscribe(
      resposne => {
        this.todos = resposne;
      }
    )
  }
}
