const cliente = {
    nome: 'Gabriel',
    idade: 18,
    cpf: '04949009594',
    email: 'gabriel.maia@teste.com'
}
//Nos objetos você pode acessar as opções com o PONTO - . - diferente do array que é com [] mas TBM DÁ
console.log(`O nome do cliente é ${cliente.nome}, e ele tem ${cliente.idade} anos.`)

//Há também alguns métodos que podem ser usados
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`)