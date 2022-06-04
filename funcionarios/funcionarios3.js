const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const nacionalidade = f => f.pais === 'Brazil'

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios.filter(nacionalidade)
  console.log(func) /// alguns funcionarios brazucas
})

//aqui eu aprendi que o reduce serve tambem como uma comparação
