import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../user.service";
import {UserModel} from "../../task/model/todo.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: UserModel = new UserModel()

  constructor(
      private dialogRef: MatDialogRef<UserDetailsComponent>,
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myInformations()
  }

  myInformations(){
    this.userService.myInformations().subscribe(response => {
      this.user = response
    })
  }

}
