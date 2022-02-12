import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../shared.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../task/model/todo.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  form: FormGroup

  constructor(
      private router: Router,
      private sharedService: SharedService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm(new UserModel())
  }

  createForm(user: UserModel){
    this.form = this.formBuilder.group({
      user_name: new FormControl(user.user_name, [
          Validators.required,
          Validators.minLength(5)
      ]),
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(user.password, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  login(){
    this.router.navigate(['login'])
  }

  createAccount(){
    this.sharedService.createAccount(this.form.value).subscribe(response => {
        this.sharedService.message('User created successfully!')
      this.router.navigate(['login'])
    }, error => {
      this.sharedService.message('Failed to register user')
    })
  }

}
