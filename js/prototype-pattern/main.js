function Person(lastname, name) {
  this.name = name
  this.lastname = lastname
}

Person.prototype.getLastName = function () {
  console.log(`My lastname is ${this.lastname}`)
}

Person.prototype.getName = function () {
  console.log(`My name is ${this.name}`)
}

let person = new Person('Beckham', 'David')

person.getName()
person.getLastName()
