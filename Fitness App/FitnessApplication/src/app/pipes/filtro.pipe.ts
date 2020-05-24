import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  //Método que nos permite filtrar los elementos del array según la palabra que hayamos introducido en el search bar de createexercice.
  transform(array: any[], text:string): any[] {
    
    //console.log(array);
      
    if(text === '') {
      return array;
    }

    text = text.toLowerCase();
    return array.filter( item => {
      return item.ejercicio.toLowerCase().includes(text);
    }); 

  }

}
