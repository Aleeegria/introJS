import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; // regex
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório !'));
}

//assincrono = async/await
async function tomarArquivo(caminhoDoArquivo) {
    
    const encoding = "utf-8";
    try {        
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
        //console.log("\n\n", chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    //} finally {
      //  console.log(chalk.magenta('Operação concluída com sucesso !!!'));
    }
}

//promisses com then
function puxarArquivo(caminhoDoArquivo1) {
    const encoding = "utf-8";
    fs.promises
        .readFile(caminhoDoArquivo1, encoding)
        .then((texto) => console.log("\n\n", chalk.cyan(texto)))
        .catch(trataErro);
}

//sincrono
function pegarArquivo(caminhoDoArquivo2) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo2, encoding, (erro, texto) => {

        if (erro) {
            trataErro(erro);
        }
        //console.log("\n\n", chalk.yellow(texto));
    })
}

console.log("\n\n", chalk.blue('Hello World !!!'));

tomarArquivo('./arquivos/texto.md');
// puxarArquivo('./arquivos/texto.md');
// pegarArquivo('./arquivos/texto.md');

//pegarArquivo('./arquivos/'); //erro

//   \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) => regex em regex101.com
