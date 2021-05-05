import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  @Input() pais: Pais = {};

  constructor() { }

  ngOnInit(): void {
  }

}
