function curry_v2(fn) {
    // Your implementation
    const arity = fn.length;
    // let args = [];
    // function curried(...args){
    //     console.log(args, "args")
    //     return fn(...args)
    // }
    function curried(...args) {
        if (args.length >= arity) {
            // console.log(args)
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    }

    return curried;
// return curried
}

//For the purpose of user debugging.
//pass appropriate input in below function call
// curry();
function sum(a, b) {
    return a + b
}
const curriedSum = curry_v2(sum);
// curriedSum(1)(2)
console.log(curriedSum(1)(2))
// module.exports = curry