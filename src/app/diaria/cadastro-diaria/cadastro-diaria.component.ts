import {Component, OnInit} from '@angular/core';
import {Diaria} from '../../shared/modelo/diaria';
import {DiariaService} from '../../shared/services/diaria.service';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
//matdialog
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-diaria',
  templateUrl: './cadastro-diaria.component.html',
  styleUrls: ['./cadastro-diaria.component.css']
})
export class CadastroDiariaComponent implements OnInit {

  diaria: Diaria;
  durationInSeconds: number = 5;

  operacaoCadastro = true;
//private dialog: MatDialog
  constructor( private _snackBar: MatSnackBar, private diariaService: DiariaService, private rotalAtual: ActivatedRoute, private roteador: Router){
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
          //alert()
          // this.abrirModal('Criado com sucesso!', 'Criado som sucesso!');
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
          });
          this.roteador.navigate(['listagemiaria']);
        }
      );
    } else {
      this.diariaService.inserir(this.diaria).subscribe(
        diariaInserida => {
          //alert()
          // this.abrirModal('Criado com sucesso!', 'Criado som sucesso!');
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
          });
          this.roteador.navigate(['listagemdiaria']);
        }
      );
    }
  }
//abrirModal
//   abrirModal(titulo: string, mensagem: string): void {
//     this.dialog.open(ModalComponent, {
//       width: '400px',
//       data: { titulo, mensagem }
//     });
//   }
}
