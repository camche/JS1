const firstName = "Aaron";
const lastName = "Jack";

let fullName;
console.log(fullName)

if (firstName && lastName) {
    // create full name
    fullName = `${firstName} ${lastName}`;
}

console.log(fullName);

// variables created inside brackets, won't be available in the outer scope.

// Variables outside the scope of {} ARE available within them.ARE

// How to get variables inside a scope to be available outside of it?

// Pre define them outside of the scope
// Variables can get passed IN to deeper scope, but cannot be passed OUT to more shallow scope.