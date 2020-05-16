export class Receta {
	private receta:string;
	private alimentos:Array<string>;
	private explicacion:string;
	private tipoReceta:string;
	private calorias:string;
 
    constructor(receta:string, alimentos:Array<string>, explicacion:string, tipoReceta:string, calorias:string){
        this.receta = receta;
        this.alimentos = alimentos;
        this.explicacion = explicacion;
        this.tipoReceta = tipoReceta;
        this.calorias = calorias;
    }

    public getReceta():string{
        return this.receta;
    }
    public getAlimentos():Array<string>{
        return this.alimentos;
    }
    public getExplicacion():string{
        return this.explicacion;
    }
    public getTipoReceta():string{
        return this.tipoReceta;
    }
    public getCalorias():string{
        return this.calorias;
    }
}