var unbalancedArray = nums => {
    var unbalanced = [];
    for (num of nums) {
        if (nums.some(element => element + num === 0) === false ) {
            unbalanced.push(num)
        }
    }
    return unbalanced
}

console.log(unbalancedArray([-1, 4, 1, 5, -4]))  // -> 5
console.log(unbalancedArray([12, 1, 21, -21, -1]))  // -> 12