import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {My_tasks_completedComponent} from "./my_tasks_completed/my_tasks_completed.component";
import {My_tasksComponent} from "./my-tasks/my_tasks.component";
import {New_taskComponent} from "./new_task/new_task.component";
import {TaskRoutingModule} from "./task.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TodoService} from "./todo.service";
import {SharedModule} from "../shared/shared.module";
import {TokenInterceptor} from "../auth/token.interceptor";
import {TasksFindComponent} from "./tasks-find/tasks-find.component";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
      My_tasks_completedComponent,
      My_tasksComponent,
      New_taskComponent,
    TasksFindComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
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
    SharedModule,
    MatTabsModule
  ],
  exports: [
    My_tasks_completedComponent,
    My_tasksComponent,
    New_taskComponent,
    TasksFindComponent
  ],
    providers: [
        TodoService,
      {
        provide: HTTP_INTERCEPTORS, //interceptor
        useClass: TokenInterceptor, //classe TokenInterceptor vai ser utilizada com interceptor da aplicação
        multi: true
      },
    ]
})
export class TaskModule { }
