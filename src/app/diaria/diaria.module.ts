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
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DecorationsModule } from '../decorations/decorations.module';

import { InicioComponent } from './inicio/inicio.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    CadastroDiariaComponent,
    ListagemDiariaComponent,
    EstatisticasComponent,
    SnackBarComponent,
    TabelaComponent,
    InicioComponent,

  ],
  exports:[
    CadastroDiariaComponent,
    ListagemDiariaComponent,
    InicioComponent
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
    FlexLayoutModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    DecorationsModule,
    MatGridListModule,
    MatProgressBarModule
  ]
})
export class DiariaModule { }
