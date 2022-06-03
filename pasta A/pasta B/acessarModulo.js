const moduloA = require('../../moduloA') //da tambem para colocar o caminho absoluto "/Users/renatomota/Desktop/NODE/NODE-js/moduloA.js"
console.log(moduloA.ola) ///fala pessoal

const saudacao = require('saudacao') //nomeando a pasta com o nome index,nao precisei colocar o caminho relativo da pasta!!!
console.log(saudacao.ola) ///bom dia pessoal

const c = require('./pasta C/index')
//é uma boa pratica referenciar o arquivo com o nome de index dentro de cada pasta "x",assim nao precisando colocar o nome "index"
console.log(c.ola2)

// const http = require('http')
// http
//   .createServer((req, res) => {
//     res.write('bom dia')
//     res.end()
//   })
//   .listen(8080)
