import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAltaComponent } from './pages/actores-alta/actores-alta.component';

const routes: Routes = [
  { path: 'alta', component: ActoresAltaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
