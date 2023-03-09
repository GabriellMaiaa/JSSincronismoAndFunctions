const notas = [10, 6.5, 8, 7.5];
//Fazer a média utilizando o FOR

let somaNotas = 0;

for (i = 0; i < notas.length; i++) {//Soma das notas
    somaNotas += notas[i];
}
console.log(somaNotas)

const media = somaNotas / notas.length;
console.log(`A média das notas é ${media}`)