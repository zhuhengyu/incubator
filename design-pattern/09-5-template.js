const Person = function(name) {
  this.name = name;
};
Person.prototype.openDoor = function() {
  console.log(`${this.name} is opening door.`);
};
Person.prototype.doSth = function() {};
Person.prototype.haveSupper = function() {
  console.log(`${this.name} having supper`);
};
Person.prototype.goHome = function() {
  this.openDoor();
  this.doSth();
  this.haveSupper();
};

const Adult = function(name) {
  Person.call(this, name);
};
Adult.prototype = new Person();
Adult.prototype.doSth = function() {
  console.log(`${this.name} watching TV.`);
};

const Child = function(name) {
  Person.call(this, name);
};
Child.prototype = new Person();
Child.prototype.doSth = function() {
  console.log(`${this.name} is doing homework.`);
};

const p1 = new Adult('Zhao');
p1.goHome();
const p2 = new Child('Qian');
p2.goHome();