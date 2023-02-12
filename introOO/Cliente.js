//arq inicio letra maiusc é classe em JS

export class Cliente {    

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    
    get cpf(){
        return this._cpf;
    }

    
}