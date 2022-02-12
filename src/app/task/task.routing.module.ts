import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarComponent} from "./listar/listar.component";
import {FinalizadosComponent} from "./finalizados/finalizados.component";

const routes: Routes = [
    { path: '', component: ListarComponent },
    { path: 'close',  component: FinalizadosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
