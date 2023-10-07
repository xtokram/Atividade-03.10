import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/layout/index/index.component';
import { MenusuperiorComponent } from './app/layout/menusuperior/menusuperior.component';
import { PessoaListComponent } from './app/pessoa/pessoa-list/pessoa-list.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { PessoadetailsComponent } from './app/pessoa/pessoadetails/pessoadetails.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroComponent } from './app/carro/carro.component';
import { LivroComponent } from './app/livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenusuperiorComponent,
    PessoaListComponent,
    HeaderComponent,
    FooterComponent,
    PessoadetailsComponent,
    LoginComponent,
    CarroComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
