function memoize(fn) {
    // write code here
    const cache = new Map()
    return function (...args) {
        const key = JSON.stringify(...args)
        console.log(key, "key")
        if (cache.has(key)) {
            console.log(`Cache hit for ${key}`);
            return cache.get(key)
        }
        console.log(`Cache miss for ${key}`);

        const result = fn(...args); // fn is accessible here via closure
        cache.set(key, result);
        return result
    }

}

// memoize();
function reverseWords(s) {
    console.log(`Computing reverse for "${s}"`);
    return s.trim().split(/\s+/).reverse().join(' ');
}

const memoizedReverseWords = memoize(reverseWords);

console.log(memoizedReverseWords("hello world")); // Computing, returns "world hello"
console.log(memoizedReverseWords("hello world")); // Cache hit, returns "world hello"
console.log(memoizedReverseWords("I love coding"));