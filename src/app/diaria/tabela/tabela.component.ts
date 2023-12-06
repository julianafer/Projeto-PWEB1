import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DiariaService } from 'src/app/shared/services/diaria.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
  displayedColumns: string[] = ['dataDia', 'coposDAgua', 'exercicios'];
  dataSource = new MatTableDataSource<Diaria>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private diariaService: DiariaService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.carregarDadosDoServidor();
  }

  carregarDadosDoServidor() {
    this.diariaService.listar().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao carregar dados do servidor:', error);
      }
    );
  }
}

export interface Diaria {
  id?: string;
  dataDia: string;
  coposDAgua: string;
  exercicios: string;
}


