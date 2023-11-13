import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { DIARIAS } from 'src/app/shared/modelo/DIARIAS';

@Component({
  selector: 'app-tabela-diaria',
  templateUrl: './tabela-diaria.component.html',
  styleUrls: ['./tabela-diaria.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TabelaDiariaComponent implements AfterViewInit {
  displayedColumns: string[] = ['posição', 'titulo', 'dataDia',];
  dataSource = new MatTableDataSource<Diaria>(DIARIAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Diaria {
  id: number;
  titulo: string;
  dataDia: string;
}
