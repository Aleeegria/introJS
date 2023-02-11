// funções

// diferença principal : HOISTING -> funções e var são "listadas" no topo
function minhafuncao(param){
}
minhafuncao("param");

// expressão de função, sem nome da função
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(2,3));

//pode ser antes de declarar
console.log(apresentar()) 

//declaração de função
function apresentar(){
    return "Hello !!!";
}

// exceção da error, não pode console antes 
// pq soma1 é var const e tem que inicializar antes
//console.log(soma1(4,8));
//const soma1 = function(num1, num2) {return num1 + num2}

// correto p uso de expressão de função
const soma2 = function(num1, num2) {return num1 + num2}
console.log(soma2(4,8));

