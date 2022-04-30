// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    let n = 0
    a.forEach(element => x === element ? n++ : n)
    if (n > 0){
      return true
    }else{
      return false
    }
  }