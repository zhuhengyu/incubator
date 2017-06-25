const Person = function(name) {
  this.name = name;
};
Person.prototype.openDoor = function() {
  console.log(`${this.name} is opening door.`);
};
// doSth is like abstract method in Java
Person.prototype.doSth = function() {
  throw new Error('Person.doSth() not implemented!');
};
Person.prototype.haveSupper = function() {
  console.log(`${this.name} having supper`);
};
// template method
Person.prototype.goHome = function() {
  this.openDoor();
  this.doSth();
  // this.saySth is a hook method
  if (this.saySth && typeof this.saySth === 'function') {
    this.saySth();
  }
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
p2.saySth = function() {
  console.log('I want to watch TV.');
};
p2.goHome();