// Arrow Function -> flecha( =>) de função

function mostrar(nome) {
    return `Meu nome é S{nome}`;
}

console.log("Maria");

//Arrow function de String
const apresentarArrow = nome => `Meu nome é S{nome}`;
console.log("Marta");

// Arrow Function de numeros
const soma = (num1, num2) => num1 + num2;
console.log(soma(5, 4));

//Arrow function com + d 1 linha de instrução
// tem que abrir as chaves e ter return
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(6, 7));

