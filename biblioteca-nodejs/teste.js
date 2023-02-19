import chalk from "chalk";

console.log(chalk.blue('Hello World !!!'));
console.log( 'olá mundo' );
console.log( 'São geralmente recuperados a partir de um objeto [ FileList ](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [ <input> ](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [ DataTransfer ](https://developer.mozilla.org/pt -BR/docs/Web/API/DataTransfer) usado em operações de arrastar e soltar, ou a partir da API. ' );
console.log( '`mozGetAsFile()` em um [ HTMLCanvasElement ](https://developer.mozilla.org/pt-BR/docs /Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Notas de implementação ](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).' );

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));
//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'Node.js'));
//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);



