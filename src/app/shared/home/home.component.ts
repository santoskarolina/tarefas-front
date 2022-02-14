import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  loginPage(){
    this.dialog.open(LoginComponent)
  }

}
