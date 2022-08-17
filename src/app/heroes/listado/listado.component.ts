import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Valhalla'];
  deletedHero: string = '';
  constructor() {}

  deleteHero() {
    this.deletedHero = this.heroes.shift() || '';
  }
}
