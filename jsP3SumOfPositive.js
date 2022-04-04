var sumOfPositive = nums => nums.map( num => {
    if (num > -1) {
        return num;
    } else { 
        return 0;
    }
}).reduce((acc, num) => acc + num )

console.log(sumOfPositive([-1,-12,-34,-40]))