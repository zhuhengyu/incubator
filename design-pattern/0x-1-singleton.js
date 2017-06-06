let getInstance = (function() {
	let instance;
	function Instance() {}
	if (!instance) {
		instance = new Instance();
	}
	return function() {
		return instance;
	}
})();

let a = getInstance();
let b = getInstance();

console.log(a === b);