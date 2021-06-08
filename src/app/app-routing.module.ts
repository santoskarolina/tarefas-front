import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DeletarComponent } from './components/pages/todo/deletar/deletar.component';
import { EditarComponent } from './components/pages/todo/editar/editar.component';
import { FinalizadosComponent } from './components/pages/todo/finalizados/finalizados.component';
import { ListarComponent } from './components/pages/todo/listar/listar.component';
import { NovoComponent } from './components/pages/todo/novo/novo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meus-todos', component: ListarComponent},
  { path: 'novo-todo', component: NovoComponent},
  { path: 'deletar-tarefa/:id', component: DeletarComponent},
  { path: 'editar-tarefa/:id', component: EditarComponent},
  { path: 'meus-todos-finalizados', component: FinalizadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }