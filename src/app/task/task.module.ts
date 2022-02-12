import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FinalizadosComponent} from "./finalizados/finalizados.component";
import {ListarComponent} from "./listar/listar.component";
import {NovoComponent} from "./novo/novo.component";
import {TaskRoutingModule} from "./task.routing.module";
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
import {TodoService} from "./todo.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
      FinalizadosComponent,
      ListarComponent,
      NovoComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    SharedModule
  ],
  exports: [
    FinalizadosComponent,
    ListarComponent,
    NovoComponent
  ],
    providers: [
        TodoService,
    ]
})
export class TaskModule { }
