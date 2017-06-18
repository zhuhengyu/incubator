const CommandQueueManager = (() => {
  const commandQueue = [];
  const push = command => {
    commandQueue.push(command);
  };
  const pop = () => {
    let command;
    if (commandQueue.length > 0) {
      command = commandQueue.shift();
    }
    return command;
  };
  return {
    push,
    pop
  };
})();

const order1 = {
  execute() {
    console.log('鱼香肉丝');
  }
};

const order2 = {
  execute() {
    console.log('剁椒鱼头');    
  }
};

const order3 = {
  execute() {
    console.log('干煸四季豆');
  }
};

CommandQueueManager.push(order1);
CommandQueueManager.push(order3);
CommandQueueManager.push(order2);
CommandQueueManager.push(order3);
CommandQueueManager.push(order1);
CommandQueueManager.push(order2);

const chef = {
  startCook() {
    setInterval(() => {
      const order = CommandQueueManager.pop();
      if (order) {
        order.execute();
        return ;
      }
      console.log('订单都处理完了');
    }, 1e3);
  }
};

chef.startCook();