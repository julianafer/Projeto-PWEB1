import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaDiariaComponent } from './tabela-diaria/tabela-diaria.component';
import { Diaria } from '../shared/modelo/diaria';
import { DIARIAS } from '../shared/modelo/DIARIAS';




@NgModule({
  declarations: [
    TabelaDiariaComponent
  ],
  imports: [
    CommonModule,
    Diaria,
    DIARIAS,
    
  ]
})
export class TabelaModule { }
