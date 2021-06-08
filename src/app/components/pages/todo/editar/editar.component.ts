import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


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

  cancelar(){
    this.router.navigate(['/meus-todos']);
  }

  getById(): void{
    this.service.getById(this.todo.id).subscribe(
      response => {
        this.todo = response;
        this.converteDados();
      }
    )
  }

  editar(): void{
    this.service.editar(this.todo).subscribe(
      response => {
        this.router.navigate(['/meus-todos']);
        this.service.mensagem(`Tarefa ${this.todo.id} editada com sucesso`);
      }
    )
  }

  converteDados():void {
    if(this.todo.status == "FINALIZADO") {
      this.todo.status = 0;
    } else if(this.todo.status == "ABERTO") {
      this.todo.status = 1;
    } 
}
}
