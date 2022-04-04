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