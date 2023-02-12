import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    static qtdeDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia );       
    }

    teste(){  
        super.teste();
        console.log(" Teste na classe conta corrente ! ");
    }
}