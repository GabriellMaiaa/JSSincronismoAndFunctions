const chamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//Porem, Ana e Caio saíram da sala, e Rodrigo entrou

chamada.splice(1, 2)// Ele remove conforme o índice e adiciona se por depois dos removidos
console.log(chamada)
//Adicionando Rodrigo

chamada.push('Rodrigo')//Pode se fazer assim
console.log(chamada)
///OUUUU
//chamada.splice(1, 2, 'Rodrigo')
