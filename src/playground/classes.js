class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return "hello, my name is " + this.name;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += this.major + " master";
    }
    return description;
  }
}

class Traveler extends Student {
  constructor(name, age, major, location) {
    super(name, age, major);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (!!this.location) {
      greeting += ` Visiting from ${this.location}`;
    }
    return greeting;
  }
}
const me = new Traveler("Patti", 29, "Biotechnology", "Cracow");
const other = new Traveler();
console.log(me.getGreeting());
console.log(other.getGreeting());
