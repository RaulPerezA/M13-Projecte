import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroReceta'
})
export class FiltroRecetaPipe implements PipeTransform {

  //Método que nos permite filtrar las recetas según la palabra que hayamos obtenido en el search bar.
  transform(array: any[], text:string): any[] {
    if(text === '') {
      return array;
    }

    text = text.toLowerCase();
    return array.filter( item => {
      return item.receta.toLowerCase().includes(text);
    }); 
  }

}
