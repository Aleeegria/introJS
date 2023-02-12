import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Alê", 12345678912);
const conta1 = new Conta(0, 1001, cliente1);
conta1.depositar(5000);

const cliente2 = new Cliente("Pedro", 23456789123);
const conta2 = new Conta(0, 1002, cliente2);

const cliente3 = new Cliente("Augusto", 34567891234);
const conta3 = new Conta(0, 1003, cliente3);

let valor = 1000;
conta1.transferir(valor, conta2);
conta1.transferir(valor, conta3);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log("valor: ", valor, "\n" );
console.log(cliente1, "\n" , conta1);
console.log(cliente2, "\n", conta2);
console.log(cliente3, "\n", conta3);

contaCorrente.teste();



