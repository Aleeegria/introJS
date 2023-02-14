import { Cliente} from "./Contas/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Alberto", 10000, 12345678910);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Pedro", 5000, 23456789012);
gerente.cadastrarSenha("23456789012");

const cliente = new Cliente("Maria", "09876543212", 34567890123);
cliente.cadastrarSenha("34567890123");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "23456789012");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "34567890123");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
console.log(gerenteEstaLogado);




