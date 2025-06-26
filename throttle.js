function throttle(callback, wait) {
    let lastCalled = 0;
  
    return function (...args) {
      const now = Date.now();
      if (now - lastCalled >= wait) {
        callback.apply(this, args);
        lastCalled = now;
      }
    };
  }
  
  // Test
  const logScroll = throttle(() => console.log("Throttled scroll!"), 1000);
  window.addEventListener("scroll", logScroll)