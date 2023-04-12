const MyObjectLiteral = {
  sum: (a, b) => {
    const result = a + b
    console.log(`Result: ${result}`)
  },

  subs: (a, b) => {
    let result = a - b
    console.log(`Result: ${result}`)
  },
}

MyObjectLiteral.sum(5, 10)
MyObjectLiteral.subs(5, 2)
