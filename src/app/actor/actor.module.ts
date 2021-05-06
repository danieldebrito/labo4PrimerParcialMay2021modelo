import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorRoutingModule } from './actor-routing.module';
import { ActoresAltaComponent } from './pages/actores-alta/actores-alta.component';
import { PaisesModule } from '../paises/paises.module';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorTablaComponent } from './components/actor-tabla/actor-tabla.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ActoresAltaComponent,
    ActorAltaComponent,
    ActorTablaComponent,
    ActorListadoComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    PaisesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ActorTablaComponent,
    ActorListadoComponent
  ]
})
export class ActorModule { }
