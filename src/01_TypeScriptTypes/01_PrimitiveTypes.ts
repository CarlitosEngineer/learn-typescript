/*
    - Topic: Examples for Primitive Types
        - boolean
        - number
        - string
        - void
        - undefined
        - null
*/

const valueBoolean1: boolean = true;
const valueBoolean2: boolean = false;

const valueNumber1: number = 42 // Integer
const valueNumber2: number = 3.14 // Float

const valueString1: string = 'John Doe'

// Void --> // void es el valor que retorno una funcion que no devuelve nada.
function noop() {
  return
}

// undefined --> No Inicializado
function testUndefinedResult(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

// null -->
function testNullResult(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

// TESTING VALUE
console.log('Valores Boleanos: ' + valueBoolean1 + ' Y ' + valueBoolean2)
console.log('Valores Entero y flotante: ' + valueNumber1 + ' Y ' + valueNumber2)
console.log('Valores Cadena: ' + valueString1)
console.log(' ## ----- ## ----- ##  ----- ##  ')
noop();
testUndefinedResult(null);
testNullResult(null);
console.log(' ## ----- ## ----- ##  ----- ##  ')
console.log(noop());
console.log(testUndefinedResult(null));
console.log(testNullResult(null));

// END TOPIC - SO GOOD!
