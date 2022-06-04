const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const brasileiro = f => f.pais === 'Brazil'
const homens = f => f.genero === 'M'
const maiorSalario = (func, funcAtual) => {
  return func.salario > funcAtual ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
    .filter(brasileiro)
    .filter(homens)
    .reduce(maiorSalario)
  console.log(func)
})
//minha requisição

/// {
///   id: 486,
///   nome: 'Domenico',
///   sobrenome: 'MacGaughey',
///   email: 'dmacgaugheydh@ebay.co.uk',
///   genero: 'M',
///   cidade: 'Tobias Barreto',
///   pais: 'Brazil',
///   empresa: 'Geba',
///   salario: 22839.94
/// }
