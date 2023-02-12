//arq inicio letra maiusc é classe em JS

import { ContaCorrente } from "./ContaCorrente";
export class Cliente {
    nome;
    _cpf;

    get cpf(){
        this.cpf;
    }

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}