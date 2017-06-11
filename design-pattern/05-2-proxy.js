const multi = function() {
	const args = Array.from(arguments);
	let result = 1;
	for (var i = 0; i < args.length; i++) {
		result *= args[i];
	}
	return result;
};

const plus = function() {
	const args = Array.from(arguments);
	let result = 0;
	for (var i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
};

const createProxyFac = function(fn) {
	return (function(fn) {
		const cache = {};
		return function() {
			const args = Array.from(arguments);
			const key = args.join(',');
			if (key in cache) {
				return cache[key];
			}
			return cache[key] = fn.apply(null, args);
		};
	})(fn);
};

const multiProxy = createProxyFac(multi);
const plusProxy = createProxyFac(plus);

console.log(multiProxy(1, 2, 3, 4));
console.log(multiProxy(1, 2, 3, 4));
console.log(multiProxy(3, 4));
console.log(multiProxy(3, 4));

console.log(plusProxy(1, 2, 3, 4));
console.log(plusProxy(1, 2, 3, 4));
console.log(plusProxy(3, 4));
console.log(plusProxy(3, 4));