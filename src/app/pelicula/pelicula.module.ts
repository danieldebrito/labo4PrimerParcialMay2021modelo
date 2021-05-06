import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActorModule } from '../actor/actor.module';
import { PaisesModule } from '../paises/paises.module';
import { PeliculaRoutingModule } from './pelicula-routing.module';

import { PeliculaTablaComponent } from './components/pelicula-tabla/pelicula-tabla.component';
import { PeliculasBusquedaComponent } from './pages/peliculas-busqueda/peliculas-busqueda.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { PeliculasAltaComponent } from './pages/peliculas-alta/peliculas-alta.component';
import { PeliculaFormAltaComponent } from './components/pelicula-form-alta/pelicula-form-alta.component';

@NgModule({
  declarations: [
    PeliculaTablaComponent,
    PeliculasBusquedaComponent,
    PeliculaDetalleComponent,
    PeliculasAltaComponent,
    PeliculaFormAltaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    MaterialModule,
    ActorModule,
    PaisesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PeliculasBusquedaComponent
  ]
})
export class PeliculaModule { }
