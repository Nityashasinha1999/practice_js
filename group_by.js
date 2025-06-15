function groupBy (array, property) {
        let result = {}
        for (let obj of array){
            console.log(obj, obj[property], "obj")
            let key = obj[property]
            if (!result[key]) {
                // Agar nahi hai, toh nayi array 
                result[key] = [];
              }
            result[key].push(obj)

        }
        return result

}
// console.log(groupBy())
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
  ];
  
  console.log(groupBy(people, "age"));
  // Output:
// {
//   "25": [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }],
//   "30": [{ name: "Charlie", age: 30 }]
// }

// const books = [
//     { title: "The Hobbit", genre: "Fantasy" },
//     { title: "1984", genre: "Dystopian" },
//     { title: "Harry Potter", genre: "Fantasy" },
//     { title: "Brave New World", genre: "Dystopian" },
//     { title: "The Alchemist", genre: "Adventure" }
//   ];
//   {
//     "Fantasy": [
//       { title: "The Hobbit", genre: "Fantasy" },
//       { title: "Harry Potter", genre: "Fantasy" }
//     ],
//     "Dystopian": [
//       { title: "1984", genre: "Dystopian" },
//       { title: "Brave New World", genre: "Dystopian" }
//     ],
//     "Adventure": [
//       { title: "The Alchemist", genre: "Adventure" }
//     ]
//   }
