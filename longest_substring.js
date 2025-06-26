function lengthOfLongestSubstring(s) {
    // Your implementation
    
    let charMap = new Map()
    for(let i = 0; i< s.length; i++){
        charMap.set(s[i], i)
    }
    console.log(charMap)
    return charMap
}

//For the purpose of user debugging.
lengthOfLongestSubstring("abcabcbb");