import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeliculasBusquedaComponent } from './pages/peliculas-busqueda/peliculas-busqueda.component';

const routes: Routes = [
  {
    path: 'busquedaPeliculas',
    component: PeliculasBusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
