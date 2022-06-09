const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8') // ler aquivos grandes podem travar o event loop
console.log(conteudo)

//assincrono ////////////////////
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  //passando uma callback quando  o arquivo for carregado
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // isso aqui ja me trouçe o arquivo JASON convertido em objeto
console.log(config.db)
/////////////////////////////////
fs.readdir(__dirname, (err, arquivos) => {
  // ler o diretorio, ama array de todos os arquivos
  console.log('conteudo da pasta...')
  console.log(arquivos)
})

//tive que ler muitos arquivos de outros professores para entender a dinamica do "event loop" e execuções sincronas e assincronas, e pelo que //eu entendi a vantagem esta em tratamento de forma assincrona para nao fazer o sistema demorar (nao travar o event loop!!!)
