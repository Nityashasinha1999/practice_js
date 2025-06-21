function findElement (arr, element) {
for(let i = 0; i<arr.length; i++){
    if(arr[i] === element){
        return i
    }

}
return -1

}
console.log(findElement([10, 20, 40, 4,5], 5))