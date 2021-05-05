import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';

@NgModule({
  declarations: [
    PaisesTablaComponent,
    PaisDetalleComponent
        
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    PaisesTablaComponent,
    PaisDetalleComponent
  ]
})
export class PaisesModule { }
