import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {SharedRoutingModule} from "./shared.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
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
      NewAccountComponent,
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
