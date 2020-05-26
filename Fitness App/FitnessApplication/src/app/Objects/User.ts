export class User {
	private nombre:string;
	private apellidos:string;
	private email:string;
	private userName:string;
	private contraseña:string;
	private fecha_nacimiento:string = new Date().toISOString();
	private peso:number;    
    private altura:number;  
 
    constructor(name:string, surnames:string, email:string, userName:string, password:string, birthdate:string, peso:number, altura:number){
        this.nombre = name;
        this.apellidos = surnames;
        this.email = email;
        this.userName = userName;
        this.contraseña = password;
        this.fecha_nacimiento = birthdate;
        this.peso = peso;    
        this.altura = altura; 
    }

    public getName():string{
        return this.nombre;
    }
    public setName(name:string){
        this.nombre=name;
    }
    public getSurnames():string{
        return this.apellidos;
    }
    public setSurnames(surnames:string){
        this.apellidos=surnames
    }
    public getEmail():string{
        return this.email;
    }
    public getUsername():string{
        return this.userName;
    }
    public getPassword():string{
        return this.contraseña;
    }
    public getBirthdate():string{
        return this.fecha_nacimiento;
    }
    public getWeight():number{
        return this.peso;
    }
    public setWeight(weight:number){
        this.peso=weight;
    }
    public getHeight():number{
        return this.altura;
    }
    public setHeight(height:number){
        this.altura=height;
    }
}