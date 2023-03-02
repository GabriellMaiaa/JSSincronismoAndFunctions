let x =''

function imprimeTexto (text) {
    console.log(text)
}
imprimeTexto('slaaa')

function soma(x, y) {// As funções devem ter um return sempre
    return x + y// Como não tem parâmetro, o return faz retornar mesmo assim.
}
soma();

//Parâmetros de função
function nomeIdade (nome, idade) {
    return `meu nome é ${nome}, e minha idade é ${idade}`
}

console.log(nomeIdade('Gabriel', 19))
console.log(nomeIdade( 19, 'Gabriel'))

function multiplica(x, y) {
    return x * y
}
console.log(multiplica(soma(4, 6), soma(9, 6))
)
