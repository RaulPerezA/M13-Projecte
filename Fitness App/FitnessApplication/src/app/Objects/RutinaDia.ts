import { RutinaEjercicio } from './RutinaEjercicio';

export class RutinaDia {
	private nombre:string;
	private ejercicios:Array<RutinaEjercicio>;

 
    constructor(nombre:string, ejercicios:Array<RutinaEjercicio>){
        this.nombre = nombre;
        this.ejercicios = ejercicios;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getRutinaEjercicios():Array<RutinaEjercicio>{
        return this.ejercicios;
    }
}