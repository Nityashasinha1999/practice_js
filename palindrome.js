function palindrome(n){
    let num = n
    let rev = 0

    while(num > 0){
        let rem = num%10;
         rev = 10*rev + rem;
        num = Math.floor(num/10);
    }
    if(rev === n){
        return true
    }
    else{
        return false
    }
 }
console.log(palindrome(123))