const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China' // referenciar para filter
const mulheres = f => f.genero === 'F' //referenciar para filter
const menorSalario = (funci, funcAtual) => {
  //referenciar para reduce
  return funci.salario < funcAtual.salario ? funci : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)

  const funci = funcionarios // usando os metodos reduce e filter
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  console.log(funci)
})
// fiquei 30 minutos para me tocar que a letra dae pais e genero tinham que ser maiusculas!!!
///{
///  id: 443,
///  nome: 'Shela',
///  sobrenome: 'Nowell',
///  email: 'snowellca@upenn.edu',
///  genero: 'F',
///  cidade: 'Yufa',
///  pais: 'China',
///  empresa: 'Quinu',
///  salario: 2435.61
///}
