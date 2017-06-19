const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

function Command(execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = val => new Command(add, sub, val);
const SubCommand = val => new Command(sub, add, val);
const MulCommand = val => new Command(mul, div, val);
const DivCommand = val => new Command(div, mul, val);

const Calculator = (() => {
  let currentVal = 0;
  const commands = [];
  return {
    execute(command) {
      commands.push(command);
      currentVal = command.execute(currentVal, command.value);
    },
    undo() {
      const command = commands.pop();
      if (command) {
        currentVal = command.undo(currentVal, command.value);
      }
    },
    logCurrentVal() {
      console.log(currentVal);
    },
    getCurrentVal: () => currentVal,
    reset: () => {
      currentVal = 0;
      commands = [];
    }
  };
})();

Calculator.logCurrentVal();
Calculator.execute(AddCommand(6));
Calculator.logCurrentVal();
Calculator.execute(SubCommand(4));
Calculator.logCurrentVal();
Calculator.execute(MulCommand(4));
Calculator.logCurrentVal();
Calculator.execute(DivCommand(2));
Calculator.logCurrentVal();

Calculator.undo();
Calculator.logCurrentVal();
Calculator.undo();
Calculator.logCurrentVal();
Calculator.undo();
Calculator.logCurrentVal();
Calculator.undo();
Calculator.logCurrentVal();