require('./global')

console.log(evitarMexer.saldacao()) /// estou em todos os lugares

evitarMexer.nome = 'deu pau' // este nao conseguiu alterar por conta do object.freeze
console.log(evitarMexer.nome) /// sistema funfando
