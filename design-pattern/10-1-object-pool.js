const objectPool = (() => {
  let index = 1;
  const Foo = function(index) {
    this.index = index;
  };
  const pool = [];
  const getObj = () => {
    if (pool.length === 0) {
      return new Foo(index++);
    }
    return pool.pop();
  };
  const recover = obj => {
    pool.push(obj);
  };
  return {
    getObj,
    recover
  };
})();

const obj1 = objectPool.getObj();
console.log(obj1);
const obj2 = objectPool.getObj();
console.log(obj2);
const obj3 = objectPool.getObj();
console.log(obj3);
const obj4 = objectPool.getObj();
console.log(obj4);
const obj5 = objectPool.getObj();
console.log(obj5);

objectPool.recover(obj3);
const obj6 = objectPool.getObj();
console.log(obj6);