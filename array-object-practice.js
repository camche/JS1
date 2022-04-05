// Array to Object 1
// Fruits in a database
// Key action : does the array item or property already exist?
    // if Yes increment
    // if NO, create and set at 1

const fruits = [
    'orange', 'orange', 'apple', 'orange', 'apple', 'pear'
];
// {orange: 3, apple: 2, pear: 1}
const fruitCounter = {}
for (let fruit of fruits) {
    console.log(fruitCounter)

    // if (fruitCounter[fruit]) means if true, which means if it exists and therefore ALREADY exists
    if (fruitCounter[fruit]) {
        console.log(fruit)
        fruitCounter[fruit]++;
    } else {
    fruitCounter[fruit] = 1;
    }
}
console.log(fruitCounter)

// Array to Object II
// Creating a simple "map"
// key action: 
    // create an output object
    // populate that output object with array indeces of object with the index named based on a property WITHIN the nested object
    // for (let arrItem of array) ... newObject[arrItem.targetKey] = arrItem
const users = [
    {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
    {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
    {username: 'igor', fullName: 'Igor Kalishnakov', description: 'Massage therapist'}
]

// {username: full user object}
// create the object we will populate
let usersMap = {};

// loop over the index items in the array of objects
for (let user of users) {
    console.log(user)
    console.log(user.username)
    
    // set userMap[nested object name 'user.username'] to be equal to the entire index/array item 'user
    // can use an existing variable(object) and then name AND set it's indeces as equal to the complete array item of the source arr
    usersMap[user.username] = user;
}
console.log(usersMap.aaron.fullName)


// Array to Object III
// Creating a complex "map"
const tweetsByDay = {}
const tweetsArr = [
    {day: 'Monday', text: 'Im tired'},
    {day: 'Monday', text: 'Need coffee'},
    {day: 'Tuesday', text: 'Feeling better'},
    {day: 'Friday', text: 'Ready to party'},
    {day: 'Friday', text: 'Lost my phone...'}
]

// Group by day: {Day: [text 1, text2,...]}

for (let arrItem of tweetsArr) {
    if (tweetsByDay[arrItem.day]) {
         tweetsByDay[arrItem.day].push(arrItem.text);
    } else {
        tweetsByDay[arrItem.day] = [arrItem.text];
    }
}
console.log(tweetsByDay)