const nomes = ['Gabriel', 'Evaldo', 'Mari'];

nomes.forEach((nome) => {
    console.log(nome)
})
function imprimeNome(n) {
    console.log(n)
}
nomes.forEach(imprimeNome)