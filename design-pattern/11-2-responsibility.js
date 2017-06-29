const Node = function(fn) {
  this.fn = fn;
  this.successor = null;
};

Node.prototype.setSuccessor = function(successor) {
  this.successor = successor;
};

Node.prototype.passReq = function() {
  const ret = this.fn.apply(this, arguments);
  if ('nextSuccessor' === ret) {
    return this.successor && this.successor.passReq.apply(this.successor, arguments);
  }
  return ret;
};

const order500 = function(type, pay, stock) {
  if (type === 2 && pay) {
    console.log('500 type, 100 got.');
  } else {
    return 'nextSuccessor';
  }
};
const order500Node = new Node(order500);

const order200 = function(type, pay, stock) {
  if (type === 1 && pay) {
    console.log('200 type, 30 got.');
  } else {
    return 'nextSuccessor';
  }
};
const order200Node = new Node(order200);

const orderNormal = function(type, pay, stock) {
  if (stock > 0) {
    console.log('Normal user.');
  } else {
    console.log('Sold out.');
  }
};
const orderNormalNode = new Node(orderNormal);

order500Node.setSuccessor(order200Node);
order200Node.setSuccessor(orderNormalNode);

order500Node.passReq(0, false, 0);
order500Node.passReq(1, true, 0);
order500Node.passReq(2, true, 0);
