import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Alê", 12345678912);
const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(5000);

const cliente2 = new Cliente("Pedro", 23456789123);
const conta2 = new ContaCorrente(1002, cliente2);

const cliente3 = new Cliente("Augusto", 34567891234);
const conta3 = new ContaCorrente(1003, cliente3);

let valor = 1000;
cliente1.transferir(valor, conta2);
cliente1.transferir(valor, conta3);
console.log("valor: ", valor);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);



