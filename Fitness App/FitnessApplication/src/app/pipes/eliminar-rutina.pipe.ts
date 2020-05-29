import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { RoutineService } from '../routine.service';

@Pipe({
  name: 'eliminarRutina'
})
export class EliminarRutinaPipe implements PipeTransform {

  resultRutina: Observable<any>;
  

  constructor(private routineService:RoutineService, private storage:Storage){}

  transform(value: string): any {
    this.resultRutina = this.routineService.removeRoutineGeneral(value);

    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();
    
    promesa.then(datos => {
 
      this.storage.set('rutinas',datos);
      return datos;
    });
  }

}
