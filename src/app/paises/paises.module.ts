import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';

@NgModule({
  declarations: [
    PaisesTablaComponent
        
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    PaisesTablaComponent
  ]
})
export class PaisesModule { }
