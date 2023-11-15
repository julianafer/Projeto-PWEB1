import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MenuComponent} from './menu/menu.component';
import {RouterLink} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { DiariaModule } from '../diaria/diaria.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    RouterLink,
    DiariaModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ]
})
export class LayoutModule { }