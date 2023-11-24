const debounce = (fn, wait) => {
  let timeout;

  // returns a new function
  return (args) => {
    //clears any exiting timeout.
    //This ensures every time the function is called again a new timeout is created.
    clearTimeout(timeout);

    //creates a new timeout with a callback as our original function.
    //wait is the number of milliseconds to wait before invoking the callback
    //args is the arguments passed to the callback
    //So if this function is not called again in next number of milli seconds in wait,
    //our callback function i.e original fn is executed.
    timeout = setTimeout(fn, wait, args);
  };
};

export default debounce;
