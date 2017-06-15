const installEvent = function(obj) {
  const event = {
    clients: {},
    listen(e, fn) {
      if (!this.clients[e]) {
        this.clients[e] = [];
      }
      this.clients[e].push(fn);
    },
    trigger() {
      const e = Array.prototype.shift.call(arguments);
      if (this.clients[e]) {
        for(let fn of this.clients[e]) {
          fn.apply(this, arguments);
        }
      }
    },
    remove(e, fn) {
      if (this.clients[e]) {
        for (var i = this.clients[e].length - 1; i >= 0; i--) {
          if (this.clients[e][i] === fn) {
            this.clients[e].splice(i, 1);
          }
        }
      }
    }
  };
  if (obj) {
    for(let k in event) {
      obj[k] = event[k];
    }
  }
}

const publisher = {};

installEvent(publisher);

const xiaoming = function(arg) {
  console.log(`xiaoming ${arg}`);
};

const xiaofang = function(arg) {
  console.log(`xiaofang ${arg}`);
};

publisher.listen('e1', xiaoming);
publisher.listen('e1', xiaofang);
publisher.listen('e2', function(arg) {
  console.log(`xiaoma ${arg}`);
});

publisher.trigger('e1', 200);

publisher.remove('e1', xiaoming);

publisher.trigger('e1', 300);