import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bienvenido',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./pelicula/pelicula.module').then(m => m.PeliculaModule)
  },
  {
    path: 'actores',
    loadChildren: () => import('./actor/actor.module').then(m => m.ActorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
