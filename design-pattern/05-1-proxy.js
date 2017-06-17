function Flower(info) {
  this.info = info;
};

const xiaoming = {
  flower: null,
  buyFlower() {
    this.flower = new Flower('from xiaoming');
  },
  sendFlower(target) {
    console.log('I\'m xiaoming, flower sent.');
    target.receiveFlower(this.flower);
  }
};

const nvshen = {
  receiveFlower(flower) {
    console.log(`I'm nvshen, I received flower ${flower.info}.`);
  },
  inGoodMood(fn) {
    console.log('I\'m nvshen, I\'ll do something when I feel good.');
    setTimeout(fn, 1e3);
  }
};

const nvshenjing = {
  receiveFlower(flower) {
    console.log('I\'m the proxy of nvshen, I received the flower.');
    nvshen.inGoodMood(function() {
      nvshen.receiveFlower(flower);
    });
  }
};

xiaoming.buyFlower();
xiaoming.sendFlower(nvshenjing);