import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../task/model/todo.model";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  baseURl: string = environment.baseUrl
    jwtHelperService: JwtHelperService = new JwtHelperService()

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

  getToken(){
      const token = localStorage.getItem('access_token')
      if(token){
          const tokenJSON = JSON.parse(JSON.stringify(token))
          return tokenJSON
      }
      return null
  }

    checkIfTheUserIsAuthenticate(): boolean {
      const token = this.getToken()
        if(token){
            const expiredToken = this.jwtHelperService.isTokenExpired(token)
            return !expiredToken
        }
        return false
    }
}
