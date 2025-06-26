function palindrome(str) {
        // Your implementation
        let cleanedStr = ""
        let reverseStr = ""
        for (const char of str) {
            const charCode = char.charCodeAt(0)
            if(charCode >= 65 && charCode<=90){
                cleanedStr += char.toLowerCase() //A-Z
            }else if(charCode >= 97 && charCode<=122){
                cleanedStr += char //a-z
            }  else  if(charCode >= 48 && charCode<=57){
                cleanedStr += char //0-9
            }
        }
        // return cleanedStr
        console.log(cleanedStr)
        for(let i = cleanedStr.length-1; i>=0 ; i--){
            reverseStr += cleanedStr[i]
        }
        console.log(reverseStr, "reverse str")
        return cleanedStr === reverseStr

   }
   
  console.log( palindrome("A man, a plan, a canal. Panama"));
   