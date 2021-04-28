let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket'); //yes - true
} else {
    console.log('No jacket necessary!');//no - false
}

/*
if (true) {
    if returns true
} else {
    if returns false
}
*/

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = 'jason';//bronze

if(myName == 'jason') {
    console.log(myName);
} else {
    console.log('Hello, what is your name?');
}//end bronze

//! Else If

let newName = 'Eric'

if(newName == "Waldo") {
    console.log('hello ' + newName + ", welcome back.");
} else if (newName == 'Eric') {
    console.log('Hello ' + newName);
} else {
    console.log("I dont know " + newName + '.');
}