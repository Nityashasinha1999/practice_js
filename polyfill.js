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
// Array.prototype.myFilter = function(callback){
//     const result = []
//     for(let i = 0; i<this.length; i++){
//         result.push(callback(this[i]))
//     }
//     return result
// }
// console.log(arr.myFilter((ele) => ele === 2))

Array.prototype.myIncludes = function(searchElement, fromIndex){
    // console.log( Object(this))
    let arr = Object(this)
    var start = fromIndex | 0 //if 5.7 - return 5 // convert to integer
    if(start < 0){
        start = Math.max(arr.len+start, 0)
    }

    for(let i = fromIndex; i<Object(this).length; i++){
        // console.log(arr[i])
        if(arr[i] === searchElement){
            return true
        }
    }
    return false

}
console.log([7,9,10].myIncludes(7, 0))

// flatten_array 
function flatten_array(arr) {
    const result =[]
    for(let item of arr){
        console.log(item)
        if(Array.isArray(item)){
            // flatten_array(...item)
            result.push(...flatten_array(item))
        }else{
            result.push(item)
        }

    }
    return result
}
console.log(flatten_array([1,2,[3,4,[5,6]]]))
Array.prototype.map2 = function(callback){
    const result = []
    console.log(this, "this")
    for(let i =0; i<this.length; i++){
        (console.log(callback(this[i]), "jj"))
        result.push(callback(this[i], i, this))
    }
    return result
}

console.log([2,3].map2((ele, index) => index*2))
Array.prototype.filter2 = function(callback){
    const result = []
    for(let i = 0; i<this.length; i++){
        // result.push(callback[i])
        const value = callback(this[i], this)

        // result.push(value === true && value)

        if(value){
            result.push(this[i])
        }
        console.log(value)
    }
    return result
}
console.log(["word", "hhhh", "f"].filter2((ele) => ele.length > 2))
Array.prototype.reduce2 = function(callback, initialValue){
    let result = 0
    console.log(this, initialValue, arguments.length)
    let accumulator = arguments.length > 2 ? initialValue : this[0]
    let startIndex = arguments.length >= 2 ? 0 : 1;
    for(let i = startIndex; i< this.length; i++){
        if(i in this){
            result = callback.call(undefined, accumulator, this[i], i, this);
        }
    }

    return accumulator
}
console.log([1, 6, 3].reduce2((acc, curr) => acc * curr, 0));