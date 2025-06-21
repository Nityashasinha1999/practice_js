function freq (str) {
    // // return str
    let freqMap = {}
    let max = 0;
    let maxWord = ""
    let splitted = str.split(" ")
    console.log(splitted, "splitted")
    for(let char of splitted){
            console.log(char, "char")
            freqMap[char] = freqMap[char] + 1 || 1;
    }
    console.log(freqMap)
    for(let char in freqMap){
        console.log(freqMap[char], char,"char2")
        if(freqMap[char] > max){
        max = freqMap[char]
        maxWord = char
        }
   
    }








return maxWord

    // let max = 0;
    // let maxChar = ""
    // for(let char of str){
    //     console.log(char, "char")
    //     freqMap[char] = freqMap[char] + 1 || 1
    // }
    // console.log(freqMap, "freqMap")
    // for(let char in freqMap){
    //     // max = freqMap[char]
    //     if(freqMap[char]> max){
    //         max = freqMap[char]
    //         maxChar = char
    //     }
    //     console.log(freqMap[char], "char2")
    // }
    // console.log(max, maxChar, "max")
    // return maxChar

}
console.log(freq("hello world hello earth world hello"), "result")


