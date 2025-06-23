function countDigit(n){
   //corner cases
    if(n=== 0) return 1
    n = Math.abs(n)
 let count = 0;
//  let n = num;
 while(n> 0){
    n = Math.floor(n/10);
    count++
 }
 return count
}
console.log(countDigit(1234))
