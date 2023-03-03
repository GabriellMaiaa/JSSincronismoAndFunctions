const notas = [7, 7.5, 8, 5, 9]
const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/ notas.length
//console.log(media)

//Adicionando valores ao ARRAY
const notas1 = [10, 6, 8]
notas1.push(7); // Ele insere valores no array
//console.log(notas1)

//Deletando notas, removendo o último elemento
const notas2 =[10, 6, 8, 5.5, 10]
notas2.pop(notas2);//O POP remov o último elemento
console.log(notas2[2]);
const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3])/ notas2.length
console.log(media2)
console.log(`A média das notas é ${media2}`)

//O SHIFT retira o primeiro elemento do array, e o UNSHIFT adiciona no primeiro