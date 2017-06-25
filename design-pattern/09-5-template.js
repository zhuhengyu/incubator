const Person = function() {};
Person.prototype.openDoor = function() {
  console.log('Open door.');
};
Person.prototype.doSth = function() {};
Person.prototype.goHome = function() {
  this.openDoor();
  this.doSth();
};

const Adult = function() {};
Adult.prototype = new Person();
Adult.prototype.doSth = function() {
  console.log('Watch TV.');
};

const Child = function() {};
Child.prototype = new Person();
Child.prototype.doSth = function() {
  console.log('Do homework.');
};

const p1 = new Adult();
p1.goHome();
const p2 = new Child();
p2.goHome();