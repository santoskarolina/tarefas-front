import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinalizadosComponent} from "./finalizados/finalizados.component";
import {TasksFindComponent} from "./tasks-find/tasks-find.component";

const routes: Routes =  [
    { path: '', component: TasksFindComponent },
    { path: 'close',  component: FinalizadosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
