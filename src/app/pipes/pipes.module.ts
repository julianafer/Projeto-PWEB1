import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPipe } from './pipe/number.pipe';



@NgModule({
  declarations: [
    NumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NumberPipe
  ]
})
export class PipesModule { }
