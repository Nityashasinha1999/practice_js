function reverseWords(sentence) {
    // Your implementation
    const words = sentence.split(" ");
    let reverseWords = "";

    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        let reverseWord = "";
        // Reverse characters of the current word
        for (let j = word.length - 1; j >= 0; j--) {
            reverseWord += word[j];
        }
        reverseWords += reverseWord;
        if (i > 0) reverseWords += " ";
        // return reverseWords
    }
    console.log(reverseWords);
    return reverseWords
}

//For the purpose of user debugging.
reverseWords("Hello World");

// module.exports = reverseWords