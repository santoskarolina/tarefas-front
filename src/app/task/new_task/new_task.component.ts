import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new_task',
  templateUrl: './new_task.component.html',
  styleUrls: ['./new_task.component.css']
})
export class New_taskComponent implements OnInit {

  form: FormGroup

  constructor(
      private service: TodoService,
      private router: Router,
      private formGroup: FormBuilder,
      private dialoref: MatDialogRef<New_taskComponent>
  ) { }

  ngOnInit(): void {
    this.createForm(new TaskModel())
  }

  cancel(){
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

  createTask(){
    this.service.newTodo(this.form.value).subscribe(
      response => {
        this.service.message("Task added successfully!")
        this.dialoref.close()
      }, () => {
        this.service.message("Failed to add task")
      }
    )
  }
}
