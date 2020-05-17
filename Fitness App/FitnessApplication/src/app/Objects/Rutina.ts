import { RutinaDia } from './RutinaDia';

export class Rutina {
	private nombre:string;
	private userName:string;
	private rutinasDias:Array<RutinaDia>;
	private fechaCreacion:Date;
	private fechaModificacion:Date;
 
    constructor(nombre:string, userName:string, rutinasDias:Array<RutinaDia>, fechaCreacion:Date ,fechaModificacion:Date){
        this.nombre = nombre;
        this.userName = userName;
        this.rutinasDias = rutinasDias;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getUserName():string{
        return this.userName;
    }
    public getRutinaDias():Array<RutinaDia>{
        return this.rutinasDias;
    }
    public getFechaCreacion():Date{
        return this.fechaCreacion;
    }
    public getFechaModificacion():Date{
        return this.fechaModificacion;
    }
}