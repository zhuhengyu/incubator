/**
 * Created by 欧阳 超 on 2017/02/24
 */

const curry = (() => {
  const currying = (fn, argLength = fn.length) => {
    return function(...args){
      if(args.length >= argLength) {
        return fn.apply(null, args);
      }
      return currying(function(...followingArgs) {
        return fn.apply(null, args.concat(followingArgs));
      }, argLength - args.length);
    }
  }
  return fn => currying(fn);
})();

exports.curry = curry;

