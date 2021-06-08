import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  getAll(): Observable<TodoModel[]> {
    const url = `${this.baseUrl}/todo/abertos`;
    return this.http.get<TodoModel[]>(url);
  }

  getAllFinalizados(): Observable<TodoModel[]> {
    const url = `${this.baseUrl}/todo/finalizados`;
    return this.http.get<TodoModel[]>(url);
  }

  newTodo(todo: TodoModel): Observable<TodoModel>{
    const url = `${this.baseUrl}/todo`;
    return this.http.post<TodoModel>(url, todo)
  }

  deletar(id: string): Observable<void> {
    const url = `${this.baseUrl}/todo/${id}`;
    return this.http.delete<void>(url);
  }

  getById(id: string): Observable<TodoModel> {
    const url = `${this.baseUrl}/todo/${id}`;
    return this.http.get<TodoModel>(url);
  }

  editar(todo: TodoModel): Observable<void>{
    const url = `${this.baseUrl}/todo/${todo.id}`;
    return this.http.put<void>(url, todo);
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

  