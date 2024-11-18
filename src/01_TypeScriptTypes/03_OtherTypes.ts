/* Topic: Other Types
    - any
    - object
    - unknown
    - never
*/

const IGNORARTHIS = '// ----- // ----- // ----- // ----- // ----- // ----- //'

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// any --> utiliza any para especificar que el valor no tiene un tipo en particular
let nameVar1: number = 1;
let nameVar2: string = "carlitos"
let nameVar3: any = nameVar1 || nameVar2;

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// object --> para crear un objeto solo hay que crear sus propiedades y sus objetos
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// unknown --> unknown is the type-safe counterpart of any
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  // a.b();
}


// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //


// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// never --> The never type represents the type of values that never occur
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) { }
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

console.log(IGNORARTHIS)

// testing ANY:
console.log(nameVar3)

console.log(IGNORARTHIS)

// testing ANY:
printCoord({ x: 3, y: 7 });

console.log(IGNORARTHIS)

