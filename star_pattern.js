// function  star4(n){
//     for(let i = 0; i<n; i++){
//         let row = ""
//         for(let j=0; j<n; j++){
//         // console.log("*")
//         row = row + "*"

//         }
//          console.log( row)
//     }

// }

// console.log(star4(4))
function star(n){
    for(let i=0; i<n; i++){
        let row = ""
        for (let j = 0; j< i+1; j++){
            // console.log(j, n-j)

            row = row + (i+1)
        }
        console.log(row)
    }

}
console.log(star(5))
