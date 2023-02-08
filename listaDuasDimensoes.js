const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
      A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
     `
);

//exemplo da aula
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];
console.log(
    `A aluna da posição 0 da lista de alunos é: ${funcionarios[0][0]}.
     A idade dessa aluna é ${funcionarios[1][0]}.
     A faculdade dessa aluna é ${funcionarios[2][0]}.
    `
);

//outro exemplo da aula
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

//outro exemplo da aula
const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat1 = arrayOriginal1.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat1)
console.log(arrayOriginal1)

//outro exemplo da aula
const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat2)
console.log(arrayOriginal2)

//outro exemplo da aula
const funcionarios1 = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
  ];

  console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)


