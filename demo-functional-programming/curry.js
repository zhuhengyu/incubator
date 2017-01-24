/**
 * Created by 欧阳 超 on 2017/01/24
 */
'use strict'

const currying = function (targetFn, targetFnLength = targetFn.length) {
    return function () {
        const args = Array.prototype.slice.apply(arguments);
        if (targetFnLength <= args.length) {
            return targetFn.apply(null, args);
        }
        return currying(function () {
            const followingArgs = Array.prototype.slice.apply(arguments);
            return targetFn.apply(null, args.concat(followingArgs));
        }, targetFnLength - args.length);
    }
}

const curry = function (fn) {
    return currying(fn);
};

const plus = curry((x, y, z, m) => {
    return x + y + z + m;
});

console.log(plus(1, 2, 3, 4));
console.log(plus(1, 2, 3)(4));
console.log(plus(1, 2)(3)(4));
console.log(plus(1)(2)(3)(4));
