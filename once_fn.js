function once(fn) {
    let hasBeenCalled = false;
    let result; 
    // Your code here ...
    return function (...args) { 
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        result = fn(...args)
        return result
      }
    return result
    }
  
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const onceAdd = once(add);
  
  console.log(onceAdd(2, 5)); // 4
  console.log(onceAdd(2, 2)); // undefined
  