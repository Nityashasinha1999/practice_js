function countNegative(arr){
    let count = 0
        for(let i = 0; i<arr.length; i++){
                if(arr[i]< 0){
                    count++
                }
        }
        return count
}
console.log(countNegative([-10, -20, 3, 4, -7]))