var isPalindrome = function(str) {
    return str === str.split('').reverse().join('')
  }
  console.log(isPalindrome("racec ar"))

  var isAlsoPal = function (str) {
      for (let i = 0; i < str.length-i; i++) {
          return str[i] === str[str.length -1 -i]
        }
  }

  console.log(isAlsoPal("racecar"))