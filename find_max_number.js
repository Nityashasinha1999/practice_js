function find_max_no(arr) {
    if(!arr.length) return null;
    let max = arr[0];
    for(let i = 0; i< arr.length ; i ++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max

}
console.log(find_max_no([2,3,6,6,3]))