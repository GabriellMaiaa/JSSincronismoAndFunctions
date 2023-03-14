const cliente = {
    nome: 'Gabriel',
    idade: 18,
    cpf: '04949009594',
    email: 'gabriel.maia@teste.com'
}
//Nos objetos você pode acessar as opções com o PONTO e com COLCHETES
console.log(`O nome do cliente é ${cliente['nome']}, e ele tem ${cliente.idade} anos.`)

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach((chave) => {
    console.log(`A ${chave} tem valor de ${cliente[chave]}`)
})