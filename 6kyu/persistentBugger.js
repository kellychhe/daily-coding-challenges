// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


function persistence(num) {
    let numArray = String(num).split('')
    let count = 0
    while (numArray.length > 1){
      count++
      let product = 1
      numArray.forEach(number => product *= number)
      numArray = String(product).split('')
    }
    return count
  }