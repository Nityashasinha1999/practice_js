function palindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleaned.length, cleaned)
    for(let i = 0; i<cleaned.length/2; i++){
        console.log(cleaned[i], cleaned[cleaned.length-i-1])
        if (cleaned[i] !== cleaned[cleaned.length - i - 1]) { return false }
      
    }
    return true

   }
   
   palindrome("A man, a plan, a canal. Panama");
   