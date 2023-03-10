//Calcular a media com o forEach
const notas = [10, 6.5, 8, 7.5];

notas.forEach(() => {// é uma função CallBack, e está sendo chamada para cada elemento do array
    console.log('Olá')
})
let somaNotas = 0;

notas.forEach((nota) => {
    somaNotas += nota;
})
const media = somaNotas / notas.length;
console.log(`A média das notas é ${media}`)