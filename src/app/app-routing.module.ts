import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './app/layout/index/index.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { PessoaListComponent } from './app/pessoa/pessoa-list/pessoa-list.component';
import { PessoadetailsComponent } from './app/pessoa/pessoadetails/pessoadetails.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:"admin", component: IndexComponent, children:[
    {path: "pessoas", component: PessoaListComponent},
    {path:"pessoas/novo", component: PessoadetailsComponent},
    {path:"pessoas/editar/:id", component: PessoadetailsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
