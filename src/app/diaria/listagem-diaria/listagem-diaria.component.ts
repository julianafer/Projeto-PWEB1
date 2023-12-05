import {Component, OnInit} from '@angular/core';
import {Diaria} from "../../shared/modelo/diaria";
import {DiariaService} from '../../shared/services/diaria.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listagem-diaria',
  templateUrl: './listagem-diaria.component.html',
  styleUrls: ['./listagem-diaria.component.css']
})
export class ListagemDiariaComponent implements OnInit {

  diarias: Array<Diaria> = [];

  constructor(private diariaService: DiariaService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.diariaService.listar().subscribe(
      diarias => this.diarias = diarias
    );
  }

  editar(diaria: Diaria): void {
    this.roteador.navigate(['telaprincipal/editadiaria', diaria.id]);
  }

  remover(diaria: Diaria): void {
    this.diariaService.remover(diaria.id).subscribe(
      resposta => {
        const indxDiariaARemover = this.diarias.findIndex(d => d.id === diaria.id);
        if (indxDiariaARemover > -1) {
          this.diarias.splice(indxDiariaARemover, 1);
        }
      }
    );

  }

}
