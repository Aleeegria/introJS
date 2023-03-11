#!/usr/bin/env node

//J8A^+e!D96ZUFy7 => senha npm alexandra_alegria

import chalk from "chalk";
import fs from "fs";
import tomarArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const argumentos = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {

    if (valida) {
        console.log(
            chalk.yellow("Lista Validada !!! "),
            chalk.black.bgGreen(identificador),
            await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow("Lista de Links !!! "),
            chalk.black.bgGreen(identificador),
            resultado);
    }

    async function processaTexto(argumentos) {
        const caminho = argumentos[2];
        const valida = argumentos[3] === '--valida';

        try {
            fs.lstatSync(caminho);
        } catch (erro) {
            if (erro.code === 'ENOENT') {
                console.log('Arquivo ou diretório não existe !');
                return; 
            }
        }

        if (fs.lstatSync(caminho).isFile()) {
            const resultado = await tomarArquivo(argumentos[2]);
            imprimeLista(valida, resultado);
        } else if (fs.lstatSync(caminho).isDirectory()) {
            const arquivos = await fs.promises.readdir(caminho);
            arquivos.forEach(async (nomeDeArquivo) => {
                const lista = await tomarArquivo(`${caminho}/${nomeDeArquivo}`);
                imprimeLista(valida, lista, nomeDeArquivo);
            })
        }
    }  
    processaTexto(argumentos); 
}

//processaTexto(argumentos);

//tomarArquivo(caminho[2]);


// console.log(caminho);
// console.log(caminho[pegarArquivo]); //node cli.js ./arquivos/texto.md //return ./arquivos/texto.md

// node src/cli.js =>comando em pws
// 'C:\\Program Files\\nodejs\\node.exe', //return
//  'D:\\Node.JS - AluraVsCode\\biblioteca-nodejs\\src\\cli.js' //return