
function customSort(arr) {
    //write your implementation here
    return arr.sort((a, b) => {
      const aIsLetter = typeof a === "string"
      const bIsLetter = typeof b === "string"
      const aIsNumber = typeof a === "number" || !isNaN(a)
      const bIsNumber = typeof b === "number" || !isNaN(b)
      if (aIsLetter && bIsLetter) {
      return  a.localeCompare(b)
      }
      if (aIsNumber && bIsNumber) {
        return a - b
      }
      if (aIsLetter && bIsNumber) {
        return -1
      }
      if (aIsNumber && bIsLetter) {
        return 1
      }
 
      return 0
  
  
    })
  }
  
  const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
  customSort(input);
console.log(customSort(input));  