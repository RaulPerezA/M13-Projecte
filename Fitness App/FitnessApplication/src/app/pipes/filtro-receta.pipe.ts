import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroReceta'
})
export class FiltroRecetaPipe implements PipeTransform {

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
