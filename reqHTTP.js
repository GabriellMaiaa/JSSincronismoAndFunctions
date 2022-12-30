const https = require('http')
const api ='viacep.com.br/ws/01001000/json/'
https.get(api, res => {
    console.log(res.statusCode)
})
console.log('testando funcionalidades')




//reqHTTP.js