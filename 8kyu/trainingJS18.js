// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(string, separator) {
    let wordArray = string.split(' ')
    let stringArray = wordArray.map(word => word.split('').join(separator))
    return stringArray.join(' ')
  }