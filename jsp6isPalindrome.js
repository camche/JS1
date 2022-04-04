var isPalindrome = function(str) {
    return str === str.split('').reverse().join('')
  }

  console.log(isPalindrome("racec ar"))