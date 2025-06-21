function findMissingNumber (nums) {
    const sum = nums.length * (nums.length + 1) / 2;
    console.log(sum)
    let sum_final = 0
    for(let i =0; i<nums.length; i++){
        sum_final += nums[i]
    }
    return  sum-sum_final
}

console.log(findMissingNumber([3,0,1]))
//output 2