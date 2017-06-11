const multi = function() {
	const args = Array.from(arguments);
	let result = 1;
	for (var i = 0; i < args.length; i++) {
		result *= args[i];
	}
	return result;
};

const multiProxy = (function() {
	const cache = {};
	return function() {
		const args = Array.from(arguments);
		const key = args.join(',');
		if (key in cache) {
			return cache[key];
		}
		return cache[key] = multi.apply(null, args);
	};
})();

console.log(multiProxy(1, 2, 3, 4));
console.log(multiProxy(1, 2, 3, 4));
console.log(multiProxy(3, 4));
console.log(multiProxy(3, 4));