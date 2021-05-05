import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  @Input() pais: Pais = {};

  constructor() { }

  ngOnInit(): void {
  }

}
