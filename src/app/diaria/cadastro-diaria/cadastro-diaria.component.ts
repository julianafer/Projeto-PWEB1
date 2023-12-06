import {Component, OnInit} from '@angular/core';
import {Diaria} from '../../shared/modelo/diaria';
import {DiariaService} from '../../shared/services/diaria.service';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cadastro-diaria',
  templateUrl: './cadastro-diaria.component.html',
  styleUrls: ['./cadastro-diaria.component.css']
})
export class CadastroDiariaComponent implements OnInit {

  diaria: Diaria;
  durationInSeconds: number = 5;
  botaonome: string = 'Cadastrar';

  operacaoCadastro = true;

  constructor( private _snackBar: MatSnackBar, private diariaService: DiariaService, private rotalAtual: ActivatedRoute, private roteador: Router){
    this.diaria = new Diaria();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      this.botaonome = 'Editar';
      const idParaEdicao = String(this.rotalAtual.snapshot.paramMap.get('id'));

      this.diariaService.pesquisarPorId(idParaEdicao).subscribe(
        diariaRetornada => this.diaria = diariaRetornada
      );
    }
  }

  ngOnInit(): void {
  }

  inserirDiaria(): void {
    const operacao = this.diaria.id ? 
      this.diariaService.atualizar(this.diaria) as Observable<any> : 
      this.diariaService.inserir(this.diaria) as Observable<any>;
  
    operacao.subscribe(
      () => {
        this._snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      }
    );
  }
  
  
}
