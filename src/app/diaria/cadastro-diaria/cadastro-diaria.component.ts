import { Component } from '@angular/core';
import { Diaria } from '../../shared/modelo/diaria';
import { DIARIAS } from '../../shared/modelo/DIARIAS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-diaria',
  templateUrl: './cadastro-diaria.component.html',
  styleUrls: ['./cadastro-diaria.component.css']
})
export class CadastroDiariaComponent {
  diariaDeManutencao: Diaria;
  estahCadastranda = true;
  nomeBotaoManutencao = 'Cadastrar';

  diarias = DIARIAS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.diariaDeManutencao = new Diaria();
    const editarDiaria = this.rotaAtual.snapshot.paramMap.get('dataDia');
    if (editarDiaria) {

      const diariaEncontrada = this.diarias.find(
        diaria => diaria.dataDia === editarDiaria);
      if (diariaEncontrada) {
        this.estahCadastranda = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.diariaDeManutencao = diariaEncontrada;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastranda && this.diariaDeManutencao) {
      this.diarias.push(this.diariaDeManutencao);
    }
    this.diariaDeManutencao = new Diaria();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemdiaria']);
  }

}
