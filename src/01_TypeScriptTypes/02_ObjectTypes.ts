/*
- Topic: Object Types
    - interface
    - class
    - enum
    - arrays
    - tuples
*/

const IGNORARTHIS = ' // ----- // ----- // ----- // ----- // ----- // ----- // '

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*
Interface --> is a method for create a new TYPE of OBJECT
    The official document TypeScript say:
        you can use interface in 3 methods { anonymous , interface , type alias }
*/

/* ----- >>>>> USE: CALL_ANONYMOUS
    Funcion mencionarUsuario, tiene paramatero llamado: Usuario
        es anonima porque: en lugar de usar un interface Usuario.
            se crea usuando los parametros de la funcion.
*/

function mencionarUsuario(Usuario: { name: string; age: number }) {
    return 'TESTING CALL_ANONYMOUS --> Nombre: ' + Usuario.name + ' ' + 'Edad: ' + Usuario.age;
}

/* ----- >>>>> USE: CALL_INTERFACE
    es CALL_INTERFACE porque:
        - declaramos la interface
        - hacemos uso de ello.
        - en este caso se crea el objeto primero.
*/

interface Vehicle {
    marca: string;
    precio: number;
}

const objVehicle1: Vehicle = {
    marca: "Nisan",
    precio: 3000000,
};

function mencionarVehicle(objVehicle1: Vehicle) {
    return 'TESTING CALL_INTERFACE --> Marca:' + objVehicle1.marca + ' ' + 'Precio:' + objVehicle1.precio;
}


/* ----- >>>>> USE: CALL_TYPE_ALIAS
    es CALL_TYPE_ALIAS porque:
    - se usa Type para crear la interface
*/

type Libro = {
    titulo: string;
    autor: string;
}
const objLibro1: Libro = {
    titulo: "Rey de los anillos",
    autor: "Bilbo bolson"
};

function mencionarLibro(objLibro1: Libro) {
    return 'TESTING CALL_TYPE_ALIAS --> Titulo: ' + objLibro1.titulo + ' ' + 'Autor: ' + objLibro1.autor;
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Class --> is a blueprint for create Models and manage object
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`TESTING CLASS --> ${this.year} ${this.make} ${this.model}`);
    }
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Enum --> It allows a developer to define a set of named constants
enum dataInfoPage {
    URL = "https://github.com/CarlosCalderon01/RoadMap_TypeScript",
    TITLE = "RoadMap_TypeScript",
    DESCRIPTION = "this page is for leanr TypeScript",
    ALT = "learn",
    CODE = 8000,
    STATUSPAGE = "DISABLE"
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Arrays --> 
let objArrayNumber1: number[] = [1, 2, 3, 4, 5];
let duplicados: number[] = objArrayNumber1.map(numero => numero * 2);
let pares: number[] = objArrayNumber1.filter(numero => numero % 2 === 0);
let suma: number = objArrayNumber1.reduce((total, numero) => total + numero, 0);

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Tuples --> arreglos que contienen 2 tipos de valores

// definimos el tamano y tipo de dato en la tupla.
type MyTuplePerson = [string, number, boolean] // Create Tuple
type MyTupleNumber = [number, number, number] // Create Tuple
type MyTupleString = [string, string, string] // Create Tuple

// instanciamos el bojeto y sus datos.
let objTuplePerson1: MyTuplePerson = ["carlitos", 34, true] // Insta Obj
let objTupleNumber1: MyTupleNumber = [2, 4, 6] // Insta Obj
let objTupleString1: MyTupleString = ["carlos", "albert", "wesker"] // Insta Obj

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// use commands ts-node 02_objectTypes.ts para ejecutar las pruebas

console.log(IGNORARTHIS)

// testing first method: ANONYMOUS
const ObjPersona1 = { name: "Juan", age: 25 };
const result1 = mencionarUsuario(ObjPersona1);
console.log(result1);

// testing second method: CALL_INTERFACE
const redult2 = mencionarVehicle(objVehicle1);
console.log(redult2);

// testing third method: CALL_TYPE_ALIAS
const result3 = mencionarLibro(objLibro1);
console.log(result3);

console.log(IGNORARTHIS)

// testing class:
const objCar1 = new Car("Toyota", "Camry", 2022);
objCar1.drive();

console.log(IGNORARTHIS)

// testing ENUM:
let valueDataInfoPage: dataInfoPage = dataInfoPage.STATUSPAGE;
console.log('TESTING ENUM' + valueDataInfoPage);

console.log(IGNORARTHIS)

// testing ARRAYS:
console.log("TESTING ARRAY --> duplicados: " + duplicados);
console.log("TESTING ARRAY --> pares: " + pares);
console.log("TESTING ARRAY --> suma: " + suma);

console.log(IGNORARTHIS)

const resultTuple1: MyTupleNumber = objTupleNumber1.map((element) => element * 2) as MyTupleNumber;
console.log(resultTuple1);

const resultTuple2: MyTupleString = objTupleString1.filter((element) => typeof element === "string") as MyTupleString;
console.log(resultTuple2);

const resultTuple3: number = objTupleNumber1.reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0);
console.log(resultTuple3);

for (const element of objTuplePerson1) {
    console.log(element);
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
