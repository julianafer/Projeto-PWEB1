import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import { CadastroDiariaComponent } from './diaria/cadastro-diaria/cadastro-diaria.component';
import { ListagemDiariaComponent } from './diaria/listagem-diaria/listagem-diaria.component';
import { TabelaDiariaComponent } from './tabela/tabela-diaria/tabela-diaria.component';

const routes: Routes = [
  // {
  //   path: 'cadastrousuario',
  //   component: MantemUsuarioComponent
  // },
  // {
  //   path: 'editausuario/:id',
  //   component: MantemUsuarioComponent
  // },
  // {
  //   path: 'listagemusuarios',
  //   component: ListagemUsuariosComponent
  // },
  {
    path: 'cadastrodiaria',
    component: CadastroDiariaComponent
  },
  {
    path: 'editadiaria/:dataDia',
    component: CadastroDiariaComponent
  },
  {
    path: 'listagemdiaria',
    component: ListagemDiariaComponent
  },
  {
    path: 'tabeladiaria',
    component: TabelaDiariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
