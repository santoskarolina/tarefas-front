import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tasks-find',
  templateUrl: './tasks-find.component.html',
  styleUrls: ['./tasks-find.component.css']
})
export class TasksFindComponent implements OnInit {

  @ViewChild('tasksfineshed') tasksfineshed: any

  constructor() { }

  ngOnInit(): void {
  }

  public updateTasksFineshed(): void{
    this.tasksfineshed.tasksClose()
  }
}
