var sumMultiples = function(n) {
var sum = 0
while (n--) {
      if (n % 3 === 0 || n % 5 ===0) {
           sum += n;
    }
}
return sum
}

// console.log(sumMultiples(10))
console.log(sumMultiples(10))
console.log(sumMultiples(200))
console.log(sumMultiples(2000))

