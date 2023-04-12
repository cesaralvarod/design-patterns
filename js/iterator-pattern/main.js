class Iterator {
  constructor(collection) {
    this.index = 0
    this.collection = collection
  }
  first() {
    return this.collection[0]
  }
  next() {
    this.index += 1
    return this.collection[this.index]
  }
  current() {
    return this.collection[this.index]
  }

  reset() {
    this.index = 0
  }

  hasNext() {
    return this.collection.length > this.index + 1
  }
}

const array = [1, 2, 3, 4, 5]

const arrayIterator = new Iterator(array)

console.log(arrayIterator.first())

while (arrayIterator.hasNext()) {
  console.log(arrayIterator.next())
}
