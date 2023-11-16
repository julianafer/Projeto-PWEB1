import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroDiariaComponent } from './diaria/cadastro-diaria/cadastro-diaria.component';
import { ListagemDiariaComponent } from './diaria/listagem-diaria/listagem-diaria.component';
import { TabelaComponent } from './diaria/tabela/tabela.component';
import { EstatisticasComponent } from './diaria/estatisticas/estatisticas.component';
import { TelaPrincipalComponent } from './layout/tela-principal/tela-principal.component';
import { LoginComponent } from './layout/login/login.component';
import { InicioComponent } from './diaria/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'telaprincipal/cadastrodiaria',
    component: CadastroDiariaComponent
  },
  {
    path: 'telaprincipal/editadiaria/:id',
    component: CadastroDiariaComponent
  },
  {
    path: 'telaprincipal/listagemdiaria',
    component: ListagemDiariaComponent
  },
  {
    path: 'telaprincipal/tabeladiaria',
    component: TabelaComponent
  },
  {
    path: 'telaprincipal/estatisticas',
    component: EstatisticasComponent
  },
  {
    path: 'telaprincipal',
    component: TelaPrincipalComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
