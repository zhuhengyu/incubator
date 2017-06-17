function Singleton(name) {
  this.name = name;
}

Singleton.prototype.getName = function() {
  return this.name;
};

Singleton.getInstance = function(name) {
  if(!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

const foo = Singleton.getInstance('foo');
const bar = Singleton.getInstance('bar');

console.log(Singleton.instance.getName());
console.log(Singleton.instance === foo);
console.log(bar.getName());
