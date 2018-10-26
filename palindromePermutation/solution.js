// Tally, %2 Test Method:

const tallyMod2 = (string) => {



// Create copy of string and convert all letters to lower case
let str = string.split("").slice(0).map(letter=> letter.toLowerCase())

// Edge Case: Return false if str contains any characters that are not
// lower-case ASCII letters
const lettersOnly = str.filter(item=> item.charCodeAt() >= 97 && item.charCodeAt()<= 122)
if (lettersOnly.length !== str.length){
  return false
}

// Create tally array of all letters in string
let tally = []
for (let i = 0 ; i < str.length; i++){
  if (tally[str[i]] === undefined){
    tally[str[i]] = 1
  } else {
    tally[str[i]]++
  }
}

// If more than one letter occurs an odd number of times, then this is not a
// palindrome permutation.
const filtTally = Object.values(tally).filter(item=> item%2!==0)

if (filtTally.length > 1){
  return false
} return true

}

// console.log(tallyMod2("DabwAcbaAAAWABBBDBA")) // should be: true
// console.log(tallyMod2("abc")) // should be: false