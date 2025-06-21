function find_min_no(arr) {
    if(!arr.length) return null;
    let min = Infinity;
    for(let i = 0; i< arr.length ; i ++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min

}
console.log(find_min_no([-9, -2, -6, -1, -7]))