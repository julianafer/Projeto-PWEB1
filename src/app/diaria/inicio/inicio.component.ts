import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  tiles: Tile[] = [
    { text: 'Você dever tomar 7 copos de água!!', cols: 3, rows: 2, color: 'lightblue', title:'Água', photo:''},
    { text: 'Você tem que andar 120 metros nesta semana!', cols: 1, rows: 2, color: 'lightgreen', title:'Caminhada', photo:'' },
    { text: 'TEm que tomar no cu', cols: 1, rows: 1, color: 'lightpink', title:'Água', photo:'' },
    { text: 'BJS', cols: 3, rows: 1, color: '#DDBDF1', title:'Água', photo:'' },
  ];

  trackTile(index: number, item: Tile): string {
    return item.text;
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  title: string;
  photo: string;
}
