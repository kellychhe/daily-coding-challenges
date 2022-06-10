// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    // for loop
    //start iteration at a stop at b
    // test along the way
    //create an empty array
    // push iteration int o array
    let arr = []
    for (let i = a ; i <= b; i++){
      arr.push(i)
    }
    return arr
  }