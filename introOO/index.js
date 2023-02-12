import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Alê", 12345678912);
conta1.agencia = 1001;
conta1.depositar(5000);

const cliente2 = new Cliente("Pedro", 23456789123 );
conta2.agencia = 1002;

const cliente3 = new Cliente("Augusto", 34567891234);
conta3.agencia = 1003;

let valor = 1000;
conta1.transferir(valor, conta2);
conta1.transferir(valor, conta3);
console.log("valor: ", valor);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);



