import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Paulo', 'paulo@dominio.com', '1967-12-11') ;
const novoAdmin = new Admin('Monica', 'moni@dominio.com', '12/03/1999');
const novoDocente = new Docente('Ivone', 'ivone@dominio.com', '12/03/1987');

console.log("\n", novoUser.exibirInfos());
console.log("\n", novoAdmin.exibirInfos());
console.log("\n", novoDocente.exibirInfos());
console.log("\n", novoAdmin.nomeAdmin());
console.log("\n", novoDocente.nome);
novoAdmin.nome = "André";
console.log(novoAdmin.nome);
novoAdmin.nome = ' 0 ';
console.log(novoAdmin.nome);

const novoUser1 = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01');
console.log(novoUser1.nome) //'Juliana'

novoUser1.nome = 'Juliana Silva Souza';
console.log(novoUser1.nome) //'Juliana'
console.log(novoUser1.sobrenome) //'Silva Souza'


// novoUser.#nome = "Marta"; // não pode pois é atributo/propriedade privado
// console.log(novoUser.nome);
