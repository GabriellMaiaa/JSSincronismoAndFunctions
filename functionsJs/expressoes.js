//Existem várias formas de se escrever uma função
function ola (text) {
    return `Olá, tudo bem? Me chamo ${text}`
}
console.log(ola('Gabriel'))

//Arrow Functionn - =>
function apresentar(nome) {
    return `Meu nome é ${nome}`
}
/////OUU
const apresentarArrow = nome => `Meu nome é ${nome}`