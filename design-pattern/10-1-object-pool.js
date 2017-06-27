const objectPoolCreator = constructor => {
  const pool = [];
  const getObj = () => pool.length === 0 ? new constructor() : pool.pop();
  const recover = obj => pool.push(obj);
  return {
    getObj,
    recover
  };
};

const Counter = (() => {
  let i = 1;
  return function() {
    this.index = i++;
  };
})();

const objectPool = objectPoolCreator(Counter);

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