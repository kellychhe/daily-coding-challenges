//Complete the solution so that it reverses the string passed into it.

function solution(str){
    let word = ''
    for (let i = str.length - 1; i >= 0; i--){
      word += str[i]
    }
      return word    
  }