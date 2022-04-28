// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    newString = ''
    for (let i = 1; i <= n; i++){
      newString += s
    }
    return newString;
  }