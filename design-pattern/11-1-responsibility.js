const order500 = function(type, pay, stock) {
  if (type === 2 && pay) {
    console.log('500 type, 100 got.');
  } else {
    order200(type, pay, stock);
  }
};

const order200 = function(type, pay, stock) {
  if (type === 1 && pay) {
    console.log('200 type, 30 got.');
  } else {
    orderNormal(type, pay, stock);
  }
};

const orderNormal = function(type, pay, stock) {
  if (stock > 0) {
    console.log('Normal user.');
  } else {
    console.log('Sold out.');
  }
};

order500(2, true, 500);
order500(2, true, 0);
order500(1, true, 0);
order500(1, false, 0);
order500(0, false, 1);
order500(0, false, 0);
