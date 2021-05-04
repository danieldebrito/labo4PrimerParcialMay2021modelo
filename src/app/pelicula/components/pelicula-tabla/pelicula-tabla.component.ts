import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculaService } from 'src/app/pelicula/pelicula.service';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent implements OnInit {

@Input() data: Pelicula[] = [];

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
