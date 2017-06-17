function Duck() {}
function Chicken() {}

function makeSound(animal) {
  if (animal instanceof Duck) {
    console.log('gagaga');
  } else if(animal instanceof Chicken) {
    console.log('gegege');
  }
}

makeSound(new Duck());
makeSound(new Chicken());