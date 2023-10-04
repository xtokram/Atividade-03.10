import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/layout/index/index.component';
import { MenusuperiorComponent } from './app/layout/menusuperior/menusuperior.component';
import { PessoaListComponent } from './app/pessoa/pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenusuperiorComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
