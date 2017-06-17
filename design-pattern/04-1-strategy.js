const strategy = {
  S: (salary)=> salary * 4,
  A: (salary)=> salary * 3,
  B: (salary)=> salary * 2,
};

const calculateBonus = (strategyKey, salary) => strategy[strategyKey](salary);

console.log(calculateBonus('S', 10000));
console.log(calculateBonus('A', 10000));
console.log(calculateBonus('B', 10000));