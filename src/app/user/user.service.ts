import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../task/model/todo.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURl: string = environment.baseUrl

  constructor(
      private http: HttpClient
  ) { }

  myInformations(): Observable<UserModel> {
    const url = `${this.baseURl}/user/infos`
    return this.http.get<UserModel>(url)
  }

}
