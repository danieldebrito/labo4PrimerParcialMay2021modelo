import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from 'src/app/class/actor';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent {

  public p: number = 1;  // paginacion primer page

  @Input() data: Actor[] = [];
  @Output() lanzaItem = new EventEmitter();
  
    constructor() { }
  
    public enviaItem(event){
      this.lanzaItem.emit({ actorLanzado: event });
    }
  }
  