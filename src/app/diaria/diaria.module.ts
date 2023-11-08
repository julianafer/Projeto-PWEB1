import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroDiariaComponent } from './cadastro-diaria/cadastro-diaria.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterLink} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListagemDiariaComponent } from './listagem-diaria/listagem-diaria.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';


@NgModule({
  declarations: [
    CadastroDiariaComponent,
    ListagemDiariaComponent,
    EstatisticasComponent,
  ],
  exports:[
    CadastroDiariaComponent,
    ListagemDiariaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    RouterLink,
  ]
})
export class DiariaModule { }