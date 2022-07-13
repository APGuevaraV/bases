import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  contador:number = 10
  base:number = 5

  operation(type:number){
    this.contador = (type === 1) ? (this.contador +1):(this.contador -1)
  }

  acumulador(type:number){
    this.contador = (type === 1) ? (this.contador + this.base):(this.contador - this.base)
  }
}
