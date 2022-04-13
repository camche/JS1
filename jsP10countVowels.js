const vowels = ['a','e','i','o','u','y']
var countVowels = function(chars) {
  let count = 0;
    for (let char of chars) {
      if (vowels.find(element => element === char))
      count++
  }
  return count
}
  console.log(countVowels("adsbecdeiiii"))
  console.log(countVowels("ffjnkjnj"))