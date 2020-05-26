export class RutinaEjercicio {
	private nombre:string;
    private ejercicio:string;
    private series:number;
    private modoEjercitar:string;
    private repeticionesSerie:number;
    private segundosSerie:number;
    private segundosDescanso:number;
    
 
    constructor(nombre:string, ejercicio:string, series:number, modoEjercitar:string, repeticionesSerie:number, segundosSerie:number, segundosDescanso:number){
        this.nombre = nombre;
        this.ejercicio = ejercicio;
        this.series = series;
        this.modoEjercitar = modoEjercitar;
        this.repeticionesSerie = repeticionesSerie;
        this.segundosSerie = segundosSerie;
        this.segundosDescanso = segundosDescanso;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getEjercicio():string{
        return this.ejercicio;
    }
    public getSeries():number{
        return this.series;
    }
    public getModoEjercitar():string{
        return this.modoEjercitar;
    }
    public getRepeticionesSerie():number{
        return this.repeticionesSerie;
    }
    public getSegundosSerie():number{
        return this.segundosSerie;
    }
    public getSegundosDescanso():number{
        return this.segundosDescanso;
    }
}