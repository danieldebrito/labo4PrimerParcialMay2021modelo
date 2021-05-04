import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculaService } from 'src/app/pelicula/pelicula.service';


@Component({
  selector: 'app-peliculas-busqueda',
  templateUrl: './peliculas-busqueda.component.html',
  styleUrls: ['./peliculas-busqueda.component.css']
})
export class PeliculasBusquedaComponent implements OnInit {

  public data: Pelicula[] = [];

  constructor(private peluculaSv: PeliculaService) { }

  public getItems() {
    this.peluculaSv.getItems().subscribe(elemets => {
      this.data = elemets;
      console.log(elemets);
    });
  }

  ngOnInit() {
    this.getItems();
  }
}