const TurnOnAirConditionerCommand = {
  execute() {
    console.log('turn on air conditioner command.');
  }
};

const CookDinnerForHost = {
  execute() {
    console.log('cook dinner for host.');
  }
};

const WashDishes = {
  execute() {
    console.log('wash dished.');
  }
};

const MacroCommand = {
  commands: [],
  push(command) {
    this.commands.push(command);
  },
  execute() {
    for (let command of this.commands) {
      command.execute();
    }
  }
};

MacroCommand.push(TurnOnAirConditionerCommand);
MacroCommand.push(CookDinnerForHost);
MacroCommand.push(WashDishes);

MacroCommand.execute();