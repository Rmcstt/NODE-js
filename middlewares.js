//middleware ou cadeia de responsabilidades

const passo1 = (ctx, next) => {
  ctx.valor1 = 1 + 1
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 1 + 2
  next()
}

const passo3 = ctx => (ctx.valor3 = 1 + 3)

const exec = (ctx, ...middlewares) => {
  const execPassos = indice => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPassos(indice + 1))
  }
  execPassos(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx) // so depois de um tempinho apos o break que caiu a ficha do galho que essa funçnao ou conjunto de funções quebra !!!
