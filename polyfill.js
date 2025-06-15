// create a map polyfill
const arr = [ 1,2, 3]
// const map = arr.map((ele) => ele*2)
// console.log(map, "map")
// const map2 = (arr)=> {
//     for(let i = 0; i< arr.length; i++){
//         arr[i] = arr[i]*2;
//     }
//     return arr
// }
// console.log(map2(arr))
// Array.prototype.myMap = function(callback){
//     // console.log(callback())
//     const result = [];
//     for(let i = 0; i< this.length; i++){
//         // console.log(this, "this.length")
//         // result.push(callback(this[i]))
//         console.log(callback(this[i]), "ggg")
//     }
//     return result
// }
// console.log(arr.myMap((ele) => ele*2))
Array.prototype.myFilter = function(callback){
    const result = []
    for(let i = 0; i<this.length; i++){
        result.push(callback(this[i]))
    }
    return result
}
console.log(arr.myFilter((ele) => ele === 2))