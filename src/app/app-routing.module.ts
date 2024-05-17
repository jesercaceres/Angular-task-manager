import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceComponent } from './apolice/apolice.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilha1Component } from './tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './tela-pai/tela-filha2/tela-filha2.component';

const routes: Routes = [
  { path: '', redirectTo: '/apolice', pathMatch: 'full' },
  {path: 'apolice', component: ApoliceComponent},
  {path: 'lista-usuario', component: ListaUsuarioComponent},
  {path: 'tela-pai', component: TelaPaiComponent, children:[
    {path: 'tela-filha1', component: TelaFilha1Component},
    {path: 'tela-filha2', component: TelaFilha2Component},
  ]},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
