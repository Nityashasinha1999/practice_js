function getSecondLargest (arr) {
        let largest = -Infinity
        let secondLargest = -Infinity
        for(let i = 0; i<arr.length; i++){
            // if(arr[i] < largest){

            // }
            if(arr[i] > largest){
                // largest = arr[i]
                secondLargest = largest
                largest = arr[i]

            }

        }
        return secondLargest
}
console.log(getSecondLargest(["10", "20", "50", "70", "30"]))