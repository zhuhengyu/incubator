(() => {
  // define Person
  class Person {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }

  // create a person
  const p = new Person('Ouyang');
  p.sayHello();

  // define Student
  class Student extends Person {
    constructor(name, id) {
      super(name);
      this.id = id;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}, I'm a student, my ID is ${this.id}.`);
    }
  }

  // create a student
  const s = new Student('Ouyang', 3130298);
  s.sayHello();

  console.log(s instanceof Person);
  console.log(s instanceof Student);
})();
(() => {
  // define Person
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };

  // create a person
  const p = new Person('Ouyang');
  p.sayHello();

  // define Student
  function Student(name, id) {
    Person.call(this, name);
    this.id = id;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  Student.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, I'm a student, my ID is ${this.id}`);
  };

  // create a student
  const s = new Student('Ouyang', 3130298);
  s.sayHello();

  console.log(s instanceof Person);
  console.log(s instanceof Student);
})();