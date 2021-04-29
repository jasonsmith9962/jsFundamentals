//! Var vs. Let

/*
Introduced in ES6, we have 3 keywords for variables:
-var
-let
-const

var & let: operate the same but behave differently
const: cannot be re-expressed.

    -var is scoped to the nearest function block
        -let is scoped to the nearest enclosing block




var x = 12;

function varTest() {
    var x = 33;
    if(1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}


varTest();
console.log(x);

*/
//! or better this
let x = 12;

function letTest() {
    let x = 33;
    if(1 == 1) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}


letTest();
console.log(x);

//Const

function constTest() {
    const scope = 1;
    //scope = 3;
    if(true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}