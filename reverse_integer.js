function reverseInteger (x) {
    let xCopy = x;
    x= Math.abs(xCopy)
    console.log(x, "xdd")
    let rev = 0
    while(x > 0){
        let rem = x % 10;
        rev = rev*10 + rem;
        x = Math.floor(x/10);
        console.log(x, "ss")
    }
    console.log(x, "xc")
    return xCopy > 0 ? rev : -rev
}
console.log(reverseInteger(321))