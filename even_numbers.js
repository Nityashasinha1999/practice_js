function checkEven(arr) {
    let even=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            // console.log(arr[i])
            even.push(arr[i])
        }
    }
    return even
}

console.log(checkEven([10, 6, 2, 7, 5 ,80]))