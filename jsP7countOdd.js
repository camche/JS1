// Solve 1

var countOdd = function(n) {
    var count = 0;
    for (i = 0; i < n; i++) {
        if (i % 2 !==0) {
            count++
        }
    }
        return count
}
console.log(countOdd(10))

// Solve 2
var countOdds = function (n) {
    return Math.floor(n/2);
}

console.log(countOdds(5))

// Solve 3
var countsOdds = function(n) {
    var count = 0;
    while (n--) {
        if ( n % 2 === 1) {
            count++
        }
    }
        return count
}
console.log(countsOdds(13))