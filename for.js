const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

//1ª expressão -> é executada 1 vez(let i = 0)
//2ª expressão -> condição da execução(i < 6)
//3ª expressão -> é executada ao final do bloco(i++)
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

