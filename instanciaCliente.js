const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) ///3   3 aqui acontece o cache do valor e por isso da igual

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) ///3   1   valor contador d nao foi alterado pois C e D foram criados a partir de uma factory
