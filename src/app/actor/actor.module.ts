import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActoresAltaComponent } from './pages/actores-alta/actores-alta.component';
import { PaisesModule } from '../paises/paises.module';



@NgModule({
  declarations: [
    ActoresAltaComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    PaisesModule
  ]
})
export class ActorModule { }
