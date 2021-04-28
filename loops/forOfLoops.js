/*
! for of loops
-iterate over the values or an iterable object (strings and arrays included)
-iterable means to be able to parse through with numbers
*/
//This does not work because the properties are not iterable
let student = {
    name: 'Jake',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

//for(item of student){
  //  console.log((item));
//}

let soupArray = ['potato', 'broccoli', 'carrot', 'chicken noodle', 'chili'];

for(soup of soupArray){
    console.log(soup);
}