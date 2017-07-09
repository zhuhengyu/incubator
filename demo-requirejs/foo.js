define(function() {
  const currying = (fn, fnLength = fn.length) => {
    return function() {
      const args = Array.from(arguments);
      if (args.length >= fnLength) {
        return fn.apply(null, args);
      } else {
        return currying(function() {
          return fn.apply(null, args.concat(Array.from(arguments)));
        }, fnLength - args.length);
      }
    }
  };
  return {
    currying
  };
});