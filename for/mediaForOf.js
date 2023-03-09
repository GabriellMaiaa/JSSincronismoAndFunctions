const notas = [10, 6.5, 8, 7.5];

for (i of notas) {// Para cada elemento de Notas
    console.log(i)
}
let soma = 0;

for(nota of notas) {
    soma += nota;
}
console.log(soma)

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}