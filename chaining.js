let num = 1;
let firstName = 'Aaron';

let numOrName = num === 0 || firstName === 'Aaron'

if (numOrName){
    console.log('this was true');
} else {
    console.log('this was false')
}

let dems = false;
let reps = false;

let either = dems || reps
console.log(either)

// ==================================

// Arrow functions
// Similar to how function expressions are made:
// must be expressed BEFORE where it is called because it is NOT hoisted

const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(2));

// Arrow version

const addTwoArrow = (num) => {
    return num + 2;
}


console.log(addTwoArrow(2));

// Other features:

// 1. Does not need parens around the parameter IF only 1 parameter
// const addTwoArrow = num => {
//     return num + 2;
// }

// 2. If it can be drafted on a single line can ommit the curlies AND the "return"
// const addTwoArrow = (num) => num + 2;

// 2.b CAN USE {}'s but MUST use RETURN if I do
// const addTwoArrow = num => {return num + 2};

// Arrow functions with multiple parameters

// const addBothNums = function(first, second) {
//     return first + second;
// }

// ...becomes:
const addBothNums = (first, second) => first + second;

    console.log(addBothNums(2,3))


// More complicated functions:
// non arrow version:
// let i = 1;
// const doubleUntilOver1000 = function (num) {
//     while (num < 1000) {
//         num *= 2;
//         i++;
//     }
//     return (`${num} ${i}`);
// }

let i = 1;
const doubleUntilOver1000 = num => {
    while (num < 1000){ 
        num *= 2;
        i++; 
    } 
    return (`${num} ${i}`);}


console.log(doubleUntilOver1000(4))
// outputs 1024 9

// What are the key points for Arrow Functions? Final notes:
// 1. arrow functions must be written as function expressions, NOT declarations/ statements.
// 2. remove the word fucntion after the '=' and add a '=>' after the parameters
// 3. remove the parens around the parameter if only 1 param, keep if more than 1
// 4. can remove the '{}'s and the word return if the whole thing can fit on 1 line

// What are HIGHER ORDER ARRAY FUNCTIONS:
// find, some, every

const nums = [1,2,3,4,5];

// FIND()

// const found = nums.find(num => {
//     if (num >2 ) {
//         return true;
//     }
//     console.log(num, "ran function")
// })

// console.log(found) - > returns 3

// some, every 

// const hasSome = nums.some(num => {
//     if (num === 10) {
//         return true;
//     }
// })
// console.log(hasSome); -> returns false

const hasEvery = nums.every(num => {
    console.log(num);
    if (num > 2) {
        return true;
    }
})

console.log(hasEvery);

// found = finds and returns a value that matches a criteria
// some = returns true if any values match
// every = returns true ONLY if ALL values match the 


const ages = [21, 42, 50, 18];


// FOR EACH
ages.forEach((age, index, arr) => {
    console.log(age, index, arr);
});

// MAP
// MOST USEFUL OF ALL HIGHER ORDER ARRAY FUNCTIONS!
// Because it allows us to modify the array IN-PLACE
const newAges = ages.map(age => {
    console.log(age);
    if ( age > 40) {
        return "boomer"
    } else {
        return "zoomer;"
    }
    return age;
})

console.log(newAges);

// FILTER
const filteredAges = ages.filter (age => {
    if (age > 40) {
        return true;
    } else {
        return false;
    }
})

console.log(filteredAges)

// SORT
// (DOES work INPLACE)
// Will sort an array of numbers lowest to highest
// will sort an array of strings alphabeticals

// ages.sort()

// console.log(ages)
//  Returned [18,21,42,50]


// REDUCE
// COMPLICATED and Useful
// Makes a copy and DOES NOT mutate in place

console.log(ages);

const result = ages.reduce((prevReturn, currentVal) => prevReturn + currentVal);
// 21 + 42 = 63 + 50 = 113 + 18 = 131

console.log(result)
// output is 131


// find, forEach, sort, reduce