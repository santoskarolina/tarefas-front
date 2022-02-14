import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {New_taskComponent} from "../new_task/new_task.component";
import {UserDetailsComponent} from "../../user/user-details/user-details.component";

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my_tasks.component.html',
  styleUrls: ['./my_tasks.component.css']
})
export class My_tasksComponent implements OnInit {

    @Output() public updateTasksFineshed: EventEmitter<any> =  new EventEmitter<any>()

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

  delete(id:string): void {
    this.service.delete(id).subscribe(
        response => {
            this.service.message(`Task deleted successfully!`);
            this.tasksOpen()
        }, error => {
          this.service.message(`Failed to delete task.`);
        })
  }

    conclude(id:string, task: any): void {
    this.service.fineshed(id, task).subscribe(
        response => {
          this.service.message(`Task completed successfully!`);
          this.tasksOpen()
            this.updateTasksFineshed.emit()
        }, () => {
          this.service.message(`Failed to complete task.`);
        })
  }

  newTask(): void{
    const dialogRef = this.dialog.open(New_taskComponent, {
        width: '450px',
        height: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

  myProfile(){
      this.dialog.open(UserDetailsComponent)
  }
}
