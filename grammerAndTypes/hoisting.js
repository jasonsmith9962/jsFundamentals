/*
-First Pass: Stores our variables declarations (essentially says, "hey, i know a variable of x is defined, so let me store that in my memory so i know its there"), but does not assign them their values.
-Anything that needs to be hoisted, is hoisted.

-Second Pass: Assigns the values to our variables and executes any hoisted source code.

*/

//console.log(myName);
let myName = 'Eric';
//console.log(randomVariable);

b()

function b() {
    console.log("I have been hoisted");
}