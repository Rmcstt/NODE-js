const fs = require('fs')

const produto = {
  nome: 'celular',
  preco: 1249.9,
  desconto: 0.15
}

fs.writeFile(
  // maneira para gravar arquivos em formato json!!!
  __dirname + '/arquivoEscrito2.json',
  JSON.stringify(produto),
  err => {
    console.log(err || 'arquivo salvo')
  }
)
