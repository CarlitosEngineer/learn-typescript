
/*
    # Primitive Types

        ## boolean
        ## number
        ## string
        ## void
        ## undefined
        ## null

    # Object Types

        ## Interface
        ## Class
        ## Enum
        ## Array
        ## Tuple
        ## Object

    # Top Types

        ## unknown
        ## any

    # Bottom Types

        ## never

    # Assertions

        ## as [type]
        ## as any
        ## as const
        ## Non-null Assertion
        ## satisfies keyword
*/

// # Primitive Types

// ## boolean: verdadero o falso
let Activadongo: boolean = true;
let Desactivadongo: boolean = false;

// ## number: enteros, flotantes, negativos, positivos.
let edad: number = 25;
let precio: number = 99.99;
let temperatura: number = -3;

// ## string: comillas simples, dobles o backticks.
let nombre: string = 'Ana';
let saludo: string = `Hola ${nombre}`;

// ## void: Se usa generalmente para funciones que no retornan nada.
function saludar1(): void {
    console.log("Hola!");
}

// ## undefined: Significa que una variable existe, pero no tiene valor asignado.
let sinValor: undefined = undefined;

// ## null: Representa intencionalmente "ningún valor".
let usuario1: string | null = null;

// # Object Types

// ## Interface: Define la forma (shape) de un objeto. Muy útil para tipos personalizados y contratos entre clases o funciones.
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

const juan: Persona = {
    nombre: "Juan",
    edad: 30,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

// ## Class: Las clases son plantillas para crear objetos. TypeScript añade tipos y modificadores (private, public, etc.).
class Animal {
    constructor(public nombre: string) { }

    hablar(): void {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

const gato = new Animal("Michi");
gato.hablar();

// ## Enum: Un enum te permite definir un conjunto de valores con nombre. Muy útil para opciones o estados fijos.
enum Color {
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Verde;
console.log(colorFavorito); // 1

enum Direccion {
    Arriba = "UP",
    Abajo = "DOWN"
}

// ## Array: Una colección de elementos del mismo tipo.
let numeros: number[] = [1, 2, 3, 4];
let palabras: string[] = ["hola", "mundo"];
// También puedes usar esta sintaxis alternativa:
let nombres: Array<string> = ["Ana", "Luis"];

// ## Tuple: Una tupla es como un array, pero con cantidad fija de elementos con tipos específicos en cada posición.
let usuario: [string, number] = ["Carlos", 25]; // nombre y edad

// ## Object: El tipo object es un tipo genérico que representa cualquier cosa que no sea un tipo primitivo.
let obj: object = { clave: "valor" };


// # Top Types: los Top Types son tipos tan amplios que cualquier otro tipo puede ser asignado a ellos.

// ## unknown: el tipo seguro para lo desconocido, Al igual que any, puede contener cualquier valor. Pero te obliga a hacer chequeos antes de usarlo. Mucho más seguro.
let valor: unknown;

valor = "texto";
valor = 42;

// ❌ Error: no sabemos qué hay ahí
// console.log(valor.toFixed(2));

// ✅ Hay que verificar antes:
if (typeof valor === "number") {
    console.log(valor.toFixed(2));
}

// ## any: el tipo que “apaga” TypeScript, Desactiva el sistema de tipos para esa variable.
let datos: any;

datos = "hola";
datos = 123;
datos = [1, 2, 3];
datos = { x: true };

// Sin errores, pero también sin protección
datos.saludar(); // No hay garantía de que esto exista

// # Bottom Types

// ## never: El tipo never representa valores que nunca ocurren. Es el opuesto a any o unknown. Un valor de tipo never significa que la función no retorna nada, porque nunca termina o lanza un error.
function cicloInfinito(): never {
    while (true) {
        console.log("Nunca voy a salir 😅");
    }
}

// # Assertions

// ## as [type]:  Úsalo cuando sabes el tipo real pero TypeScript no puede deducirlo.
let valor1: unknown = "Hola mundo";
let longitud = (valor1 as string).length;

// ## as any: Le dices a TypeScript: no me molestes con tipos a partir de este punto.
let datos2: unknown = 42;

let numero = datos2 as any;
numero.saludar(); // No hay error de tipo 😬

// ## as const: Convierte una estructura en una literal inmutable, Ideal para arrays o objetos con valores constantes. Muy útil con switch, enums, o validación exhaustiva.
const colores = ["rojo", "verde", "azul"] as const;
// typeof colores = readonly ["rojo", "verde", "azul"]
const config = {
    modo: "oscuro",
    tema: "azul"
} as const;
// Cada valor se convierte en su tipo literal: "oscuro", "azul"

// ## Non-null Assertion: Cuando estás seguro de que un valor no es null ni undefined, pero TypeScript no lo sabe, puedes usar !
function saludar(nombre?: string) {
    console.log("Hola " + nombre!.toUpperCase());
}

// ## satisfies keyword: Verifica que un valor cumple con un tipo, pero sin cambiar el tipo inferido. Súper útil para validación sin perder la inferencia.
type Config = {
    modo: "oscuro" | "claro";
    tema: string;
};

const conf = {
    modo: "oscuro",
    tema: "azul"
} satisfies Config;
