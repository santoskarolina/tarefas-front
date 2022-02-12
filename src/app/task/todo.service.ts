import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {TaskModel} from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  tasksOpen(): Observable<TaskModel[]> {
    const url = `${this.baseUrl}/task/openn`;
    return this.http.get<TaskModel[]>(url);
  }

  tasksClose(): Observable<TaskModel[]> {
    const url = `${this.baseUrl}/todo/close`;
    return this.http.get<TaskModel[]>(url);
  }

  newTodo(todo: TaskModel): Observable<TaskModel>{
    const url = `${this.baseUrl}/task`;
    return this.http.post<TaskModel>(url, todo)
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/task/${id}`;
    return this.http.delete<void>(url);
  }

  findOne(id: string): Observable<TaskModel> {
    const url = `${this.baseUrl}/task/${id}`;
    return this.http.get<TaskModel>(url);
  }

  mensagem(string: String): void{
    this.snack.open(`${string}`, 'OK',
    {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}

