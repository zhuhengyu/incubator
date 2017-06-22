const OpenDoorCommand = {
  execute() {
    console.log('open door.');
  }
};

const TurnOnAirConditionerCommand = {
  execute() {
    console.log('turn on air conditioner.');
  }
};

const TurnOnTvCommand = {
  execute() {
    console.log('turn on tv.')
  }
};

const CloseDoorCommand = {
  execute() {
    console.log('close door.');
  }
};

const TurnOnPcCommand = {
  execute() {
    console.log('turn on personal computer.');
  }
};

const DoubleClickDota2Command = {
  execute() {
    console.log('double click dota2.');
  }
};

const CreateMacroCommand = function() {
  const commands = [];
  const push = command => {
    commands.push(command);
  };
  const execute = () => {
    for (let command of commands) {
      command.execute();
    }
  };
  return {
    push,
    execute,
  };
};

const MacroCommand1 = CreateMacroCommand();
const MacroCommand2 = CreateMacroCommand();
const MacroCommand3 = CreateMacroCommand();

MacroCommand1.push(OpenDoorCommand);
MacroCommand1.push(CloseDoorCommand);
MacroCommand2.push(TurnOnTvCommand);
MacroCommand2.push(TurnOnPcCommand);
MacroCommand2.push(DoubleClickDota2Command);
MacroCommand3.push(MacroCommand1);
MacroCommand3.push(TurnOnAirConditionerCommand);
MacroCommand3.push(MacroCommand2);

MacroCommand3.execute();