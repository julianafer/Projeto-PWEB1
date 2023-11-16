import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'dataDia', 'coposDAgua', 'exercicios'];
  dataSource = new MatTableDataSource<Diaria>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.carregarDadosDoServidor();
  }

  carregarDadosDoServidor() {
    this.http.get<Diaria[]>('http://localhost:3000/diarias').subscribe(
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
  id: number;
  dataDia: string;
  coposDAgua: string;
  exercicios: string;
}


