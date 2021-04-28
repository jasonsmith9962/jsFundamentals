// Ternary is a shortcut for writing i/else & else/if statements

let num = 'Waldo';

if(num > 0) {
    console.log('Yes');
} else {
    console.log("No");
}

//IF              if true           else        if false
num > 7 ? console.log('Yes it is') : console.log('It is not');



num > 10 ? console.log('it is larger than 10') : 
num < 5 ? console.log('it is smaller than 5') : 
num < 10 ? console.log('it is less than 10') : 
console.log(`${num} is NaN`);
