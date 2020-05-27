import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { EliminarRutinaPipe } from './eliminar-rutina.pipe';
import { FiltroRecetaPipe } from './filtro-receta.pipe';



@NgModule({
  declarations: [FiltroPipe, EliminarRutinaPipe, FiltroRecetaPipe],
  exports: [FiltroPipe, EliminarRutinaPipe, FiltroRecetaPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
