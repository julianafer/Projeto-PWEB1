import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import { CadastroDiariaComponent } from './diaria/cadastro-diaria/cadastro-diaria.component';
import { ListagemDiariaComponent } from './diaria/listagem-diaria/listagem-diaria.component';
import { TabelaComponent } from './diaria/tabela/tabela.component';
import { EstatisticasComponent } from './diaria/estatisticas/estatisticas.component';

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
    path: 'editadiaria/:id',
    component: CadastroDiariaComponent
  },
  {
    path: 'listagemdiaria',
    component: ListagemDiariaComponent
  },
  {
    path: 'tabeladiaria',
    component: TabelaComponent
  },
  {
    path: 'estatisticas',
    component: EstatisticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
