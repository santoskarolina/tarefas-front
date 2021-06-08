import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {


  todo: TodoModel = {
    nome: '',
    descricao: '',
    dataFinalizar: '',
  }
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigate(['/meus-todos'])
  }
  salvar(){
    this.service.newTodo(this.todo).subscribe(
      response => {
        this.service.mensagem("Tarefa adicionada com sucesso!")
        this.router.navigate(['/meus-todos']);
      }, err => {
        this.service.mensagem("Data incorreta(dd/mm/yyyy)")
      }
    )
  }
}
