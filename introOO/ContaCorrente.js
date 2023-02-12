//arq inicio letra maiusc é classe em JS
// JS é fracamente tipada
// pode-se adicionar atributos em objetos dinamicamente em JS
export class ContaCorrente {
    //atributos publicos
    static qtdeDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
        this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    //atributos privados
    _saldo = 0; // atributo privado pelo _ ou #

    get saldo(){
        return this._saldo;
    }

    constructor (cliente, agencia){
        this.agencia = agencia;
        this._cliente= cliente;
        ContaCorrente.qtdeDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log(" Saldo insuficiente !!! ");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } else {
            console.log(" Valor válido !!! ");
        }
        this._saldo += valor;
        console.log(this._saldo);
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "Brasília";
    }
}