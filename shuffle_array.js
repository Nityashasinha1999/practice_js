// function shuffleArray (arr) {
//     // let random = Math.floor(Math.random() * (arr.length - 1) + 1);
//     let result = []
//     for(let i = 0; i< arr.length ; i++){
//         const j = Math.floor(Math.random() * (i + 1))
//         // [arr[i], arr[j]] = [arr[j], arr[i]]
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         // result.push(arr[i])

//         // for(let j)
//     }
//     console.log(random,arr, "random")

// return result
// }
// console.log(shuffleArray(["1", "3", "5", "7"]))
function shuffle(array) {
    for (let i = 0 ; i< array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Example:
  let arr = [1, 2, 3, 4, 5];
  shuffle(arr);
  console.log(arr); // e.g., [3, 1, 5, 2, 4]