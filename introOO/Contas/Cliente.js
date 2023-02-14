//arq inicio letra maiusc é classe em JS

export class Cliente {    

    constructor (nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        this.autenticar = 1;

    }

    autenticar(){
        return true;
    }
    
    get cpf(){
        return this._cpf;
    } 

    get senha(){
        return this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

}