// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Combining Types --> In TypeScript, you can combine types using type union and type intersection.
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
/*
    - Union Types
        in TypeScript allow you to specify multiple possible
        types for a single variable or parameter.
        A union type is written as a vertical bar | separated list of types.
*/

// Example 1 -->
function combine(input1: string | number, input2: string | number) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}
const result = combine(5, "carlos")
console.log(result)

// Example 1 -->
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
printId("202");
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //