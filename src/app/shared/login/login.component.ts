import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../shared.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  new_account: boolean = false

  user: string = ''

  constructor(
      private router: Router,
      private sharedService: SharedService,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: new FormControl(null, [
          Validators.required
      ]),
      user_name: new FormControl(null, [
          Validators.required
      ]),
      avatar: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  newAccountForm(){
     return this.new_account = true
  }

  loginForm():void{
    this.new_account = false
  }

  login(){
    this.sharedService.generateToekn(
        this.form.controls.email.value, this.form.controls.password.value).subscribe(response => {
            const access_token = response.access_token
      localStorage.setItem('access_token', access_token)
      this.dialogRef.close()
      this.router.navigate(['tasks'])
    }, error =>  {
          this.form.reset()
      this.user = 'Incorrect email or password'
    })
  }

  createAccount(){
    this.sharedService.createAccount(this.form.value).subscribe(response => {
      this.sharedService.message('User created successfully!')
      this.form.reset()
      this.new_account = false
    }, error => {
      this.sharedService.message('Failed to register user')
    })
  }

  close() {
    this.dialogRef.close()
  }
}
