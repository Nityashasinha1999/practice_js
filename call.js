Function.prototype.myCall = function(thisArg, ...args) {
    console.log(thisArg, ...args, "this")
    thisArg = thisArg || window;
    thisArg.fn = this
    console.log(thisArg, ...args, "this")
    const result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}
const person = {
    name: "Nitya"
}
function sayHello(props) {
    console.log(props, "proos")
    return console.log(this.name, props)
}

sayHello.myCall(person, "namaste")

Function.prototype.myBind = function(thisArg, argsArray) {
    // console.log(thisArg, ...args, "this")/.
    thisArg = thisArg || window;
    thisArg.fn = this
    // console.log(thisArg, ...args, "this")
    const result = argsArray ? thisArg.fn(...argsArray) : thisArg.fn()
    delete thisArg.fn
    return result
}
function sayHello(props) {
    console.log(props, "proos")
    return console.log(this.name, props)
}

sayHello.myBind(person, ["namaste", "hhh"])