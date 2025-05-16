function flatten_array (arr) {
    const result = [];
    for(let item of arr){
        if(Array.isArray(item)){
             result.push(...flatten_array(item))
        }else{
             result.push(item)
        }
    }
    return result
}
console.log(flatten_array([1, [2, [3, 4], 5], 6]))