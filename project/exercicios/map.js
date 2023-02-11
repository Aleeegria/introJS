const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; //operador ternario
       // nota + 1 é igual ou maior a 10? se sim, 10, senão nota+1               
});

console.log(notasAtualizadas);
