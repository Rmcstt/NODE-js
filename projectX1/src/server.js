const porta = 3003

const { request } = require('express')
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {  // caso for colocar um middleware!!!chains of response
//   console.log('Middleware 1...')
//   next()
// })

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) // ele vai converter para json
})

app.get('/produtos/:id'),
  (req, res, next) => {
    res.send(bancoDeDados.getproduto(req.params.id))
  }

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.name
  })
})

app.listen(porta, () => {
  console.log(`servidor executando na porta ${porta}.`)
})
