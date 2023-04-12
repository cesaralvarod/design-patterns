# Patrón iterador

El patrón iterador es uno de los patrones de diseño de software más usado en Javascript y también uno de los más sencillos. Es un patrón de comportamiento ya que define como se comunican objetos entre si. De él se extienden importantes aplicaciones que pueden ayudar a definir mejores arquitecturas en aplicaciones web, por lo que su uso y estudio es altamente recomendado. En este post aprenderemos como implementarlo en Javascript y en que situaciones lo podemos usar.

Empecemos por definir este patrón. Básicamente todos hemos usado arrays de esta forma [1,2,3,4] y usualmente si queremos recorrerlo nos inclinamos rápidamente por usar una estructura cíclica como "for" o “while” sin embargo esto hace que el código sea un poco mas imperativa y menos declarativa haciendo que no tengamos tanto control con cada dato unitario dentro del arreglo. Desde este punto es donde empieza a cobrar fuerza este patron iterador ya que básicamente lo que nos provee es una manera de recorrer el arreglo de una manera declarativa. El principal principio de este patrón es permitirnos recorrer colecciones de objetos de una manera que podamos decidir cuando queremos el siguiente objeto y cuando no. Para ello obligatoriamente deben existir tres métodos dentro del iterador:

- first() --> Retorna siempre el primer objeto de la colección.
- next() --> Retorna el siguiente objeto de la colección si existe.
- current() --> Retorna el objeto actual de la colección sobre el estamos parado.
