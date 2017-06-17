function Duck() {}
function Chicken() {}

Duck.prototype.sound = function() {
  console.log('gagaga');
};

Chicken.prototype.sound = function() {
  console.log('gegege');
};

function makeSound(animal) {
  animal.sound();
}

makeSound(new Duck());
makeSound(new Chicken());

function Dog() {}
Dog.prototype.sound = function() {
  console.log('wangwang');
};

makeSound(new Dog());