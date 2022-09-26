class abstrata {'veiculos'}; 

constructor(modelo, marca, cor, numeroRodas) ;{
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    } 
    clone(); {

    }

    represent() ;{
        console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.rodas}`); 
    }


let carro = class extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, numeroDePortas){
        super(modelo, marca, cor, numeroRodas);
        this.numeroDePortas = numeroDePortas;
        
        Veiculo.prototype.represent=function(){
            console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.numeroRodas} || Portas: ${this.numeroDePortas}`);
        }
    }
    
};

let bicicleta = class extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        super(modelo, marca, cor, numeroRodas);
      

        Veiculo.prototype.represent=function(){
            console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.numeroRodas}`);
        }
    }
};


let aplicacao = class {
    veiculos = [];
}

let duster = new carro('dynamique', 'renault', 'Cinza', 4);
console.log(duster.represent());

let caloi = new bicicleta("lazer", 'caloi', 'red', 2);
console.log(caloi.represent());