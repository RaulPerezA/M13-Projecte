export class Ejercicio {
	private _id:string;
	private ejercicio:string;
	private imagen:string;
	private video:string;
	private descripcion:string;
	private dificultad:string;
	private especificacion:string;
	private grupoMuscular:string;
 
    constructor(ejercicio:string, imagen:string, video:string, descripcion:string, dificultad:string, especificacion:string, grupoMuscular:string){

        this.ejercicio = ejercicio;
        this.imagen = imagen;
        this.video = video;
        this.descripcion = descripcion;
        this.dificultad = dificultad;
        this.especificacion = especificacion;
        this.grupoMuscular = grupoMuscular;
    }

    public getEjercicio():string{
        return this.ejercicio;
    }
    public getImagen():string{
        return this.imagen;
    }
    public getVideo():string{
        return this.video;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
    public getDificultad():string{
        return this.dificultad;
    }
    public getEspecificacion():string{
        return this.especificacion;
    }
    public getGrupoMuscular():string{
        return this.grupoMuscular;
    }
}