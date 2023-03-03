const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const tamanaho = alunos.length
console.log(tamanaho)

const sala1 = alunos.slice(0, alunos.length / 2)// Mostra que eu quero os alunos do índice 0 até o 9
const sala2 = alunos.slice(alunos.length / 2)

console.log(sala1)
console.log(sala2)

//O slice te faz FATIAR párte dos array