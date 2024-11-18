// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Combining Types --> In TypeScript, you can combine types using type union and type intersection.
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
/*
    - Intersection Types
        An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.

        type typeAB = typeA & typeB;
        type typeBA = typeB & typeA;

*/

interface User {
    id: number;
    name: string;
}

interface Contact {
    phone: number;
    email: string;
}

// type typeAB = typeA & typeB;
type Streamer = User & Contact

let objStreamer1: Streamer = {
    id: 123,
    name: 'carlitos',
    phone: 3129999999,
    email: 'Carlitos@papasote.com',
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Bibliography -->
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
/*

- https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/

*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

