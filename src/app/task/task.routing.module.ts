import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksFindComponent} from "./tasks-find/tasks-find.component";

const routes: Routes =  [
    { path: '', component: TasksFindComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
