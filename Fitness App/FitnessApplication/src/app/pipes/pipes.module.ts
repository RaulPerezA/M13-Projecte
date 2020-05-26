import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { EliminarRutinaPipe } from './eliminar-rutina.pipe';



@NgModule({
  declarations: [FiltroPipe, EliminarRutinaPipe],
  exports: [FiltroPipe, EliminarRutinaPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
