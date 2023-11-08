import { Component } from '@angular/core';
import { Diaria } from '../../shared/modelo/diaria';
import { DIARIAS } from '../../shared/modelo/DIARIAS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listagem-diaria',
  templateUrl: './listagem-diaria.component.html',
  styleUrls: ['./listagem-diaria.component.css']
})
export class ListagemDiariaComponent {

  diarias = DIARIAS;

  excluir(diariaARemover: Diaria): void {
    const indx = this.diarias.findIndex(diaria =>
      diaria.dataDia === diariaARemover.dataDia);

    this.diarias.splice(indx, 1);
  }

  editar(diaria : Diaria) : void {
    // const diariaEncontrada = this.diarias.findIndex(diariaRemover => diariaRemover.dataDia == diaria.dataDia);
    // if (diariaEncontrada) {
      
    // }
  }

  

}
