let duck = {
  duckSinging() {
    console.log('gagaga');
  }
};

let chicken = {
  duckSinging() {
    console.log('gagaga');
  }
};

let choir = [];

let joinChoir = function(animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
  }
}

joinChoir(duck);
joinChoir(chicken);

for(let animal of choir) {
  animal.duckSinging();
}