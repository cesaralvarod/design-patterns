// nn
;(() => console.log("I'm an anonymus code..."))()

const myModule = (() => console.log("2. I'm an anonymus code..."))()

myModule

const secondModule = (() => {
  const publicFunction = {}

  let total = 0

  privateFuntion = () => total * 500

  publicFunction.sum = (a, b) => {
    let sum = a + b
    total += sum
    console.log(`Result of sum is ${sum}`)
  }

  return publicFunction
})()

secondModule.sum(10, 5)
