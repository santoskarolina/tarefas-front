import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {NewAccountComponent} from "./new-account/new-account.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'new-account',  component: NewAccountComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
