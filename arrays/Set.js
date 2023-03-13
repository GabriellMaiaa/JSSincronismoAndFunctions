//Removendo Duplicatasss
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);// O SET remove as duplicatas

const nomesAtualizados = [...meuSet]

console.log(nomesAtualizados)