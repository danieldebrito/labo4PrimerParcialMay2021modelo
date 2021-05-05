import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from '../../paises.service';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.css']
})
export class PaisesTablaComponent implements OnInit {

  // @Input() paises: Pais[];
  public paises: Pais[];
  @Output() pasaPais = new EventEmitter();

  public p: number;  // paginacion primer page

  constructor(    private paisesService: PaisesService
    ) { this.p = 1; }

  public enviarPais(pais: Pais) {
    this.pasaPais.emit({paisEnviado: pais});
  }

  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }

  ngOnInit(): void {
    this.getPaises();
  }

}
