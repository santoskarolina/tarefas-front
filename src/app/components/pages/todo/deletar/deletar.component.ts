import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {


  todo : TodoModel = {
    id: '',
    nome: '',
    descricao : '',
    status: '',
    dataFinalizar: ''
  }
  constructor(private service: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get('id');
    this.getById();
  }


  getById(): void{
    this.service.getById(this.todo.id).subscribe(
      response => {
        this.todo = response;
      }
    )
  }

  cancelar(){
    this.router.navigate(['/meus-todos'])
  }
  
  deletar(): void {
    this.service.deletar(this.todo.id).subscribe(
      response => {
        this.service.mensagem(`Tarefa ${this.todo.id} deletada com sucesso!`);
        this.router.navigate(['/meus-todos'])
      }
    )
  }
}
