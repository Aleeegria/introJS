//arq inicio letra maiusc é classe em JS

export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}