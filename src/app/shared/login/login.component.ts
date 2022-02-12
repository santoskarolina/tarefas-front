import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  user: string = ''

  constructor(
      private router: Router,
      private sharedService: SharedService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: new FormControl(null, [
          Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  newAccount(){
    this.router.navigate(['new-account'])
  }

  login(){
    this.sharedService.generateToekn(
        this.form.controls.email.value, this.form.controls.password.value).subscribe(response => {
            const access_token = response.access_token
      localStorage.setItem('access_token', access_token)
      this.router.navigate(['tasks'])
    }, error =>  {
          this.form.reset()
      this.user = 'Incorrect email or password'
    })
  }

}
