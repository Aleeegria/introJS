// variaveis const e let
let altura = 5;
let comprimento = 7;
let forma = "retangulo";
let area = altura * comprimento;

if (forma === "retangulo"){
     area = (altura * comprimento);
} else {
     area = (altura * comprimento)/2;
}
console.log(area)

const formato = "triangulo";
const alt = 6;
const comp = 8;
let area1;

if (formato === "quadrado"){
    area1 = (alt * comp);
    console.log(formato)
} else {
    area1 = (alt * comp)/2;
    console.log(formato)
}
console.log(area1)

