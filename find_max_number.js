function find_max_no(arr) {
    if(!arr.length) return null;
    let max = -Infinity;
    for(let i = 0; i< arr.length ; i ++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max

}
console.log(find_max_no([-9, -2, -6, -1, -7]))