import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() item: Pelicula = {};

  constructor() { }

  public limpia(){
    this.item = {};
  }

  ngOnInit(): void {
  }

}
