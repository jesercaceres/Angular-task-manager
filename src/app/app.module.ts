import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilha1Component } from './tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './tela-pai/tela-filha2/tela-filha2.component';

@NgModule({
  declarations: [
    AppComponent,
    ApoliceComponent,
    ListaUsuarioComponent,
    MenuSuperiorComponent,
    PaginaNaoEncontradaComponent,
    TelaPaiComponent,
    TelaFilha1Component,
    TelaFilha2Component
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
