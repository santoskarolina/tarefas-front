import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "./user.service";
import {UserDetailsComponent} from "./user-details/user-details.component";

@NgModule({
  declarations: [
      UserDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
      UserService
  ],
  exports: [
      UserDetailsComponent
  ]
})
export class UserModule { }
