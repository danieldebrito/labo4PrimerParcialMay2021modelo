import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeliculasAltaComponent } from './pages/peliculas-alta/peliculas-alta.component';
import { PeliculasBusquedaComponent } from './pages/peliculas-busqueda/peliculas-busqueda.component';

const routes: Routes = [
  { path: 'busquedaPeliculas', component: PeliculasBusquedaComponent },
  { path: 'peliculaAlta', component: PeliculasAltaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
