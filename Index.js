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
    ${firstName}
    third paragraph

    <div>
        <h1>${firstName}</h1>
        <p>fourth paragraph</p>
    </div>
    `;

    // 5.7 Arrays
    // set an array as following

    const nums = [1, "string", 3];

    console.log(nums.length);
    // add a value to the end of an array
    nums.push(4);
    console.log(nums);

    // "Pop" off the last value of an array with "pop"
    let lastIndex = nums.pop();
    console.log(lastIndex);
    console.log(nums);

    // Reassign a value in and index within an array by assigning it as follows:
    nums[0] = 1;
    console.log(nums);




    // 5.8 Objects

    // example
    const user = {
        key: "data",
        name : "Cameron",
        age: 36,
        hasJob: false,
        socialMedia: {
            twitter: "",
            facebook: "",
        }
    };
    
    // dot syntax
    // dot notation
    // object.key returns value at key for object
    console.log(user.name);

    // string literal syntax
    console.log(user['name']);

    // variable syntax (use a string literal stored in a variable)
    // const variable = key
    // object[variable] returns value at variable-defined key
    const key = 'name';
    console.log(user[key]);

    

    // cannot reassign the name of an object defined by const
    //  user = "newData" ... doesn't work
    
    // CAN reassign the data within an object
    // re-assign data in an object
    user.name = "kamenche";
    console.log(user.name);
    user.socialMedia.twitter = "cottello";
    console.log(user.socialMedia.twitter);

    // if data doesn't exist within an undefined...cannot read properties of undefined
    // console.log(user.lastName.twitter);

    // Document Object Model:
    // document is the object in JS that represents the page you are working on