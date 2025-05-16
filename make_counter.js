function make_counter (count){
    // let count = 0;
    function increment () {
        count++
        return count
    }
    function decrement() {
        count--
        return count

    }
    function reset() {
        count = 0
        return count

    }
    return {
        increment,
        decrement,
        reset
    }
}
console.log(make_counter(5).reset())