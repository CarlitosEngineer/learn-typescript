// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Assertions
    - as const
    - as [type]
    - as any
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
//  const --> it only allow read params
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

const colors = ['red', 'green', 'blue'] as const
const x = 'hello' as const
const y = [10, 20] as const

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
//  as [type] --> indicate data type
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

const someValue: any = 'Hello, TypeScript!'
const strLength: number = (someValue as string).length

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
//  as any --> indicates that the value is of any type
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

const anyValue: any = 42

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
