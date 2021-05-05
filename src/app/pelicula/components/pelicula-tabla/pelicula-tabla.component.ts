import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent {

@Input() data: Pelicula[] = [];
@Output() lanzaItem = new EventEmitter();

  constructor() { }

  public enviaItem(event){
    this.lanzaItem.emit({ peliculaLanzada: event });
  }
}
