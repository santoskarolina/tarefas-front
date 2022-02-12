import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../task/model/todo.model";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  baseURl: string = environment.baseUrl

  constructor(
      private http: HttpClient,
      private snack: MatSnackBar
  ) { }

  createAccount(user: UserModel): Observable<UserModel> {
    const url = `${this.baseURl}/user`
    return this.http.post<UserModel>(url, user)
  }

  message(string: String): void{
    this.snack.open(`${string}`, 'OK',
        {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000});
  }

  generateToekn(email:string, password:string){
      const params = new HttpParams()
          .set('email', email)
          .set('password', password)
      const url = `${this.baseURl}/auth/login`
      return this.http.post<any>(url, params)
  }
}
