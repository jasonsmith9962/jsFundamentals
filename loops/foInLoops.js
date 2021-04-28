/*
! For in loops
-great for interating over values in a object
-properties in objects are what's called enumerable
-enumerable just means 'countable'
*/

let student = {
    name: 'Jake',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
}
