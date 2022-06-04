console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log('dentro de uma funcao declarada')
  console.log(this === exports) /// false..... dentro de uma funcao o this nao aponta para o exports
  console.log(this === module.exports) /// false
  console.log(this === global) /// true
}
logThis()

logThis2 = () => {
  console.log('dentro de uma funcao arrow...')
  console.log(this === exports) ///true .... porem em uma funcao arrow o comportamento e diferente
  console.log(this === module.exports) ///true
  console.log(this === global) /// false
}

logThis2()
