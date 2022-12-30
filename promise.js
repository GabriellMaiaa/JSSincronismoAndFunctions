/**
 * Promise
 * 
 * A promessa de que algo irá acontecer ,e
 * poderá dar certo ou errado, mas irá acontecer
 */
let aceitar = false

const promessa = new Promise((resolve, rejected) => {
   if(aceitar === true){
    return resolve('Carro chegou')
   }
   else {
    return rejected('Pedido negado')
   }
})
console.log('Pedido Feito!')
console.log('Aguardando carro')

promessa.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => {console.log('Finalizado')})