var repeatString = function(s, n) {
    var acc = "";
    while (n--) {
        acc += s;
    }
    return acc
  }

console.log(repeatString("Asdf",3))