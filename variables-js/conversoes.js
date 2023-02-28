//conversão implícita
const numero = 456;
const numeroString= '456';

console.log(numero == numeroString)
console.log(numero + numeroString)// Desse jeito ele concatena

console.log(numero + Number(numeroString))// Aqui ele converte para number