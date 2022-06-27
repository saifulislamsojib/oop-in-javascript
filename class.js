// 1. Inheritance
// 2. Polymorphism
// 3. Encapsulation
// 4. Abstraction

// class
class Person {
  count = 1;
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const person1 = new Person("Saiful Islam", "Sojib", 22);

console.log(person1);
console.log(person1.fullName());

const person2 = new Person("Arif", "Nur", 22);

console.log(person2);
console.log(person2.fullName());
