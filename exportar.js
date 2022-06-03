console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //❌ nao é o jeito certo de exportar algo para fora da pasta
console.log(module.exports)

exports = {
  //❌
  nkome: 'teste'
}
console.log(module.exports)
module.exports = { publico: true } //✅    esse é o jeito certo de exportar algo para fora da pasta!!
