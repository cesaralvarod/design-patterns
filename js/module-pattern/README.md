# Patrón Module

Ese tipo de declaración se conoce como **IIFE (Immediately-Invoked-Function-Expressions)**, y como su nombre lo dice es una función que se ejecuta de manera inmediata. Esta función crea un nuevo scope y genera “privacidad”, sin embargo JavaScript no maneja el concepto de “privacidad”, pero al generar un nuevo scope podemos simularlo, esto se logra envolviendo toda la lógica del aplicativo dentro de un contenedor. La idea es solo retornar las partes que nosotros necesitamos, y dejar las otras partes del código fuera del scope global.

Después de crear el nuevo scope, necesitaremos un namespace para tener acceso al código que el modulo anónimo retorne.

> NameSpace: Variable con la que se genera la referencia a nuestro modulo anónimo.

Hasta este momento podemos tener acceso a lo que retorne el modulo anónimo.

Con anterioridad se habló de _“privacidad”_ dentro de este patrón, para poder mostrar este concepto funcionando analizaremos el siguiente ejemplo. Ver [main.js](./main.js)

Como se muestra en el ejemplo generamos un módulo, el cual nos permite realizar una suma, sin embargo, a un que simple vista podemos ver un código común y corriente, lo interesante es que ya se está manejando el concepto de “privacidad”, y no podemos tener acceso al método privateFunction, pero si al método suma. Esto se debe a que solo estamos retornando todo lo que contenga la variable publicFunction y lo que no se encuentre dentro de ésta será privado y solo se tendrá acceso dentro del scope de nuestro modulo :).

La pregunta que te puedes estar realizando hasta este momento es ¿Cómo consulto la respuesta de privateFunction?, para esto tendríamos que generar una función pública que obtenga el resultado que lanza “privateFunction”, como se muestra a continuación.

> Nota: en este patrón es común ver que todos los métodos privados cuentan con el prefijo \_. Tomando en cuenta la recomendación anterior nuestro código de ejemplo quedaría de la manera siguiente.
