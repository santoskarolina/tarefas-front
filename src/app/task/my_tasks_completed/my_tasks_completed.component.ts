import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-my_tasks_completed',
  templateUrl: './my_tasks_completed.component.html',
  styleUrls: ['./my_tasks_completed.component.css']
})
export class My_tasks_completedComponent implements OnInit {

  taskCompleted: TaskModel[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.tasksClose();
  }

  public tasksClose(): void {
    this.service.tasksClose().subscribe(
      response => {
        this.taskCompleted = response
      }
    )
  }

  delete(id:string): void {
    this.service.delete(id).subscribe(
        response => {
            this.service.message(`Task deleted successfully!`);
          this.ngOnInit()
        }, error => {
            this.service.message(`Failed to delete task.`);
        })
  }

}
