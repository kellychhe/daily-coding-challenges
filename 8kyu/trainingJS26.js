// Task
// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

function isolateIt(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length % 2 === 0){
        newArr.push(`${arr[i].slice(0, (arr[i].length/2))}|${arr[i].slice(arr[i].length/2)}`) 
      } else{
        newArr.push(`${arr[i].slice(0, Math.floor(arr[i].length/2))}|${arr[i].slice(Math.ceil(arr[i].length/2))}`)
      }
    }
    return newArr
  }