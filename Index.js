// Variables
console.log('hello world');
let num = 1;
let num2 = 2;
num = 3;
console.log(num * num2);

// Numbers, Booleans, conditionals
const myMoney = 301; 
const myFriendsMoney = 200 + 20;  //primitive data type
//primitive data types... these are numbers, strings, booleans
const totalMoney = myMoney + myFriendsMoney; 

// "Modulo", In math "remainder" math) "modulo" (in programming)
const change = totalMoney % 100;

//Booleans
const iHaveMoreMoney = myMoney > myFriendsMoney;
console.log(iHaveMoreMoney);

const iHaveSameMoney = myMoney == myFriendsMoney;
console.log(iHaveSameMoney);

const iHaveSameSameMoney = myMoney === myFriendsMoney;
console.log(iHaveSameSameMoney);

const iHaveLessMoney = myMoney < myFriendsMoney;
console.log(iHaveLessMoney);

if (myMoney > myFriendsMoney) {
    console.log('Im rich');
} else if (myMoney > 200){
    console.log('Im doing okay');
} else if (myMoney > 100) {
    console.log('Im not doing great');
} else {
    console.log('Im poor');
}

//"clearest code is the best"

//print even if my money is even
//print odd if my money is odd
const isEven = ((myMoney % 2) === 0);
console.log (isEven)

if (isEven) { //even
    console.log('Even');
} else  {
    console.log('Odd');
}

let myName = 'Cameron';
let myMiddleName = `null`;
let myFriendsName = `Matt`;

// Indexing
console.log(myName [0]);

// Interpolation
console.log(`hello there ${myName}`);

// Concatenation
console.log (myName + " _space_ " + myMiddleName);

// String Method "Length"
console.log(myName.length)

const lengthTest = 3

if (myName.length > lengthTest ) {
    console.log(`${myName} is longer than ${lengthTest}!` );
} else {
    console.log(`${myName} is NOT longer than ${lengthTest}`)
}

// video 5.6
// "Template Strings"
//  use \n to create new lines within a string
//  use \t to insert a Tab worth of space in a string
// use back ticks to be able to use new lines and tabs via enter/return keys and tab
// template strings, and using back ticks make multi line strings and HTML v easy to write and generate with JS

var firstName = "Aaron"
var helloStringe = `<h1>Hello ${firstName}</h1>`

var paragraphs = `
    first paragraph
    ${firtName}
    third paragraph

    <div>
        <h1>${firstName}</h1>
        <p>fourth paragraph</p>
    </div>
    `;

    // 5.7 Arrays

    const nums = [1, 2, 3];

    console.log(nums.length);
