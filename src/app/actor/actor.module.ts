import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorRoutingModule } from './actor-routing.module';
import { ActoresAltaComponent } from './pages/actores-alta/actores-alta.component';
import { PaisesModule } from '../paises/paises.module';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';



@NgModule({
  declarations: [
    ActoresAltaComponent,
    ActorAltaComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    PaisesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActorModule { }
