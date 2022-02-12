import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  form: FormGroup

  constructor(
      private service: TodoService,
      private router: Router,
      private formGroup: FormBuilder,
      private dialoref: MatDialogRef<NovoComponent>
  ) { }

  ngOnInit(): void {
    this.createForm(new TaskModel())
  }

  cancelar(){
   this.dialoref.close()
  }

  createForm(task: TaskModel){
    this.form = this.formGroup.group({
      name: new FormControl(task.name, [
          Validators.required
      ]),
      description: new FormControl(task.description, [
        Validators.required
      ])
    })
  }

  salvar(){
    this.service.newTodo(this.form.value).subscribe(
      response => {
        this.service.mensagem("Tarefa adicionada com sucesso!")
        this.dialoref.close()
      }, err => {
        this.service.mensagem("Data incorreta(dd/mm/yyyy)")
      }
    )
  }
}
