//Clonando com o Spread Operator

const notas = [7, 7, 8, 9]//Pode ser dessa forma ou com SPREAD OPERATOR

const novasNotas  = [...notas]
notas.push(5)
console.log(novasNotas)//Ele clona tudo o que tiver dentro daquele array ou função
console.log(notas)