const firstSolution = (str1, str2) => {
  if (str1 === str2){
    return true
  }

  // Replacement
  if (str1.length === str2.length){
    let dontMatch = 0
    for (let i = 0; i < str1.length; i++){
      if (str1[i] !== str2[i]){
        dontMatch++
      }
      if (dontMatch > 1){
        return false
      }
    }
    return true
  // Insertion/Removal
  } else {
    // Find out which string is longer and which is shorter
    let long = str1.length > str2.length? str1:str2;
    let short = str1.length < str2.length? str1:str2;
    // Iterate over the longer string
    for (let i = 0; i < long.length; i++){
      // Compare each letter until you find where the insertion/removal was made
      if (long[i] !== short[i]){
        // If only a single insertion/removal took place, then slicing away this
        // letter should result in long and short being exactly equivalent
        long = long.slice(0,i) + long.slice(i + 1)
        if (long === short){
          return true
        }
        return false
      }
    }
  }


}

// console.log(firstSolution("pale", "pale"))
// console.log(firstSolution("pale", "bale"))
// console.log(firstSolution("pae", "pale"))