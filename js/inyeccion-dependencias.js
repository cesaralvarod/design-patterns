class Beer {
  constructor(name, alcohol) {
    this.name = name
    this.alcohol = alcohol
  }
}

class Barman {
  constructor(name, beer) {
    this.name = name
    this.beer = beer
  }

  serve() {
    console.log(`${this.name} barman serve the beer ${this.beer.name}`)
  }
}

let barman = new Barman('Pedro', new Beer('Cristal', 30))
barman.serve()
