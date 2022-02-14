import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {SharedRoutingModule} from "./shared.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SharedService} from "./shared.service";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
      LoginComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
      SharedRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      HttpClientModule,
      MatSnackBarModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatTooltipModule,
    MatFormFieldModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
      SharedService
  ]
})
export class SharedModule { }
