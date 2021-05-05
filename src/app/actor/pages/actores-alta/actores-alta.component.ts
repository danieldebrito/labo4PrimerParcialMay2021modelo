import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'app-actores-alta',
  templateUrl: './actores-alta.component.html',
  styleUrls: ['./actores-alta.component.css']
})
export class ActoresAltaComponent implements OnInit {

  public paisActor: Pais = {};

  constructor() { }

  public AsignaPaisActor(event){
    this.paisActor = event.paisEnviado;
  }

  ngOnInit(): void {
  }

}
