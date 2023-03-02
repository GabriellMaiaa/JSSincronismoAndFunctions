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
//A arrow function se tiver mais de UMA linha de argumento, NECESSITA de Chaves

const somaNumerosPequenos = (n1, n2) => {
    if(n1 > 10 || n2 > 10) {
        return "Somente número de 1 a 9"
    } else {
        return n1 + n2
    }
}