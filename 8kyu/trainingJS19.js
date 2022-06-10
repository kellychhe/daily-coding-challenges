// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

function alienLanguage(str){
    let strArray = str.toLowerCase().split(' ')
    let alien = []
    for (let i = 0; i < strArray.length; i++){
      alien.push(strArray[i].slice(0, strArray[i].length - 1).toUpperCase() + strArray[i][strArray[i].length - 1])
    }
    return alien.join(' ')
  }