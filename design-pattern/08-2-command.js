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

const orderSystem = {
  orders: [{
    execute() {
      console.log('鱼香肉丝');
    }
  }, {
    execute() {
      console.log('剁椒鱼头');
    }
  }, {
    execute() {
      console.log('干煸四季豆');
    }
  }],
  startOrder() {
    setInterval(() => {
      const index = Math.floor(Math.random() * 3);
      CommandQueueManager.push(this.orders[index]);
    }, 1e3); 
  }
};

const chef = {
  startCook() {
    setInterval(() => {
      const order = CommandQueueManager.pop();
      if (order) {
        order.execute();
        return ;
      }
      console.log('订单都处理完了');
    }, 9e2);
  }
};

orderSystem.startOrder();
chef.startCook();