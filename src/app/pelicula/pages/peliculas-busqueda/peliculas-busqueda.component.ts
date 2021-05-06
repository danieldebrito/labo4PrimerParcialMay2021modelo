import { Component, OnInit, ViewChild } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculaService } from 'src/app/pelicula/pelicula.service';


@Component({
  selector: 'app-peliculas-busqueda',
  templateUrl: './peliculas-busqueda.component.html',
  styleUrls: ['./peliculas-busqueda.component.css']
})
export class PeliculasBusquedaComponent implements OnInit {

  public data: Pelicula[] = [];
  public pelicula: Pelicula = {};

  constructor(private peluculaSv: PeliculaService) { }

  public getItems() {
    this.peluculaSv.getItems().subscribe(elemets => {
      this.data = elemets;
      console.log(elemets);
    });
  }

  public detallePeli(event){
    this.pelicula = event.peliculaLanzada;
  }

  ngOnInit() {
    this.getItems();
  }
}