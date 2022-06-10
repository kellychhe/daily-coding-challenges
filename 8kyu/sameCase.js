// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function sameCase(a, b){
    let upper = [a.toUpperCase(), b.toUpperCase()]
    let lower = [a.toLowerCase(), b.toLowerCase()]
    if (upper[0] === lower[0] || upper[1] === lower[1]){
      return -1
    }
    if (a === upper[0] && b === upper[1] || a === lower[0] && b === lower[1] ){
      return 1
    } else{
      return 0
    }
  }