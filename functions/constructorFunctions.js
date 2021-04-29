// option 1

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}
//  1       2           3
function Person(name, age, canVote) {
//4    5      6    
this.name = name;
this.age = age;
this.canVote = canVote;
}
console.log(typeof Person);

//             7     8   
let person4 = new Person ('James', 80, true);
console.log(person4);

/*
1-the function keyword
2-the function name. For constructor functions, the name should be capitalized.
3-the parameters. these will be the VALUES of the object once this function is in use.
4-the 'this' keyword. 'this' gives us the ability to refer back to whatever called or activates it. in this case, 'this' refers to 'Person'
5-this will be a key of the new object we will create. this is NOT revering to the parameter.
6-this is refering to the parameter that we pass our constructor function.
7&8-the 'new' keyword is calling our Person function, creating a new person with the values we pass in as arguments, and storing that person in a variable
*/