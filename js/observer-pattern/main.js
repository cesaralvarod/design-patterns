// Para implementar el patrón observador en Javascript, comenzamos creando una clase llamada Publicador que contenga los métodos subscribe(), unsubscribe() y notify().
class Publicador {
  constructor() {
    this.subscriptors = []
  }

  subscribe(subscriptor) {
    this.subscriptors.push(subscriptor)
  }

  unsubscribe(subscriptor) {
    this.subscriptors = this.subscriptors.filter(item => item !== subscriptor)
  }

  notify(event) {
    this.subscriptors.forEach(item => {
      item.call(this, event)
    })
  }
}

// Ahora, imaginemos que usaremos esta definición de Publicador para un periódico que regularmente publica nuevas ediciones.

const periodico = new Publicador()

// Pensemos en los clientes (subscriptores), que necesitarán saber cuándo llega una nueva versión del periódico. Inicialmente, los clientes son funciones:

function Observer(edicion) {
  console.log('LLegó una nueva edición con el nombre de: ' + edicion)
}

periodico.subscribe(Observer)
periodico.subscribe(Observer)
periodico.notify('Nueva edicion')
