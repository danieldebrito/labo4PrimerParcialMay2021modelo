import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { ActoresService } from '../../actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public actores: Actor[] = [];

  constructor(
    private actoresSv: ActoresService
  ) { }

  public getItems() {
    this.actoresSv.getItems().subscribe(elemets => {
      this.actores = elemets;
      // console.log(elemets);
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
