/*
  1          2
let hi = () >= {
    console.log('hi);
}

1:We need to set the fat arrow function to a variable.
2:We use the 'fat arrow
 to signify its a function.

 -arrow functions (fat arrow functions) introduced in ES6.
 -a more concise way to write function expressions "not declarations"
 -arrow functions do NOT get hoisted.

 -2 types of arrow functions:
 --concise body
 --block body
*/

//! Concise Body
let hi = () => console.log('hi');
//concise body arrow functions return by default.

//! Block Body
//let hi = () => {
  //  console.log('Hi');
//}
//block body arrow functions must have a return in the body of the function (between the {})


let apples = x => console.log('There are ${x} apples.');
apples(10);

