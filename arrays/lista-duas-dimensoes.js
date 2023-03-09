//A Lista de duas dimensões de Array com dois arrays, é chamada de Matriz

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 9, 7.5, 8];

const alunosEMedias = [alunos, medias];
console.log(alunosEMedias[0][1])

console.log(`Quero a aluna 3 da lista1 que é: ${alunosEMedias[0][2]}, com nota ${alunosEMedias[1][2]}`)

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)