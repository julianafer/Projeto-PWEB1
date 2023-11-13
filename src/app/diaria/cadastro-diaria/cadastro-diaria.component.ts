import {Component, OnInit} from '@angular/core';
import {Diaria} from '../../shared/modelo/diaria';
import {DiariaService} from '../../shared/services/diaria.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-diaria',
  templateUrl: './cadastro-diaria.component.html',
  styleUrls: ['./cadastro-diaria.component.scss']
})
export class CadastroDiariaComponent implements OnInit {

  diaria: Diaria;

  operacaoCadastro = true;

  constructor(private diariaService: DiariaService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.diaria = new Diaria();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      // pegar do banco usuario id=idParaEdicao
      this.diariaService.pesquisarPorId(idParaEdicao).subscribe(
        diariaRetornada => this.diaria = diariaRetornada
      );
    }
  }

  ngOnInit(): void {
  }

  inserirDiaria(): void {
    if (this.diaria.id) {
      this.diariaService.atualizar(this.diaria).subscribe(
        diariaAlterado => {
          this.roteador.navigate(['listardiarias']);
        }
      );
    } else {
      this.usuarioService.inserir(this.usuario).subscribe(
        diariaInserida => {
          this.roteador.navigate(['listardiarias']);
        }
      );
    }
  }
}
