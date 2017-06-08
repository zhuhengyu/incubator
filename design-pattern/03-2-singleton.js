function Singleton(name) {
	this.name = name;
}

Singleton.prototype.getName = function() {
	return this.name;
};

Singleton.getInstance = (()=> {
	let instance;
	return (name)=> {
		if (!instance) {
			instance = new Singleton(name);
		}
		return instance;
	};
})();

const foo = Singleton.getInstance('foo');
const bar = Singleton.getInstance('bar');

console.log(foo.getName());
console.log(bar.getName());
console.log(foo === bar);
