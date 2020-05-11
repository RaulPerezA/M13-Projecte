export class User {
	private name:string;
	private surnames:string;
	private email:string;
	private userName:string;
	private password:string;
	private birthdate:string = new Date().toISOString();
	private weight:number;    
	private height:number;  
    constructor(name:string, surnames:string, email:string, userName:string, password:string, birthdate:string, peso:number, altura:number){
        this.name = name;
        this.surnames = surnames;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.birthdate = birthdate;
        this.weight = peso;    
        this.height = altura; 
    }

    public getName():string{
        return this.name;
    }
    public getSurnames():string{
        return this.surnames;
    }
    public getEmail():string{
        return this.email;
    }
    public getUsername():string{
        return this.userName;
    }
    public getPassword():string{
        return this.password;
    }
    public getBirthdate():string{
        return this.birthdate;
    }
    public getWeight():number{
        return this.weight;
    }
    public getHeight():number{
        return this.height;
    }
}