import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaTablaComponent } from './components/pelicula-tabla/pelicula-tabla.component';
import { PeliculasBusquedaComponent } from './pages/peliculas-busqueda/peliculas-busqueda.component';
import { MaterialModule } from '../material.module';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';


@NgModule({
  declarations: [
    PeliculaTablaComponent,
    PeliculasBusquedaComponent,
    PeliculaDetalleComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    MaterialModule
  ],
  exports: [
    PeliculasBusquedaComponent
  ]
})
export class PeliculaModule { }
