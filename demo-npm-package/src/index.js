/**
 * Created by 欧阳 超　on 2017/02/26
 */

export const curry = (() => {
  const currying = (fn, argLength = fn.length) => {
    return (...args) => {
      return args.length >= argLength ? fn.apply(null, args) :
        currying((...followingArgs) => {
          return fn.apply(null, args.concat(followingArgs));
        }, argLength - args.length);
    }
  }
  return fn => currying(fn);
})();