// static properties and methods

class Person {
  static count = 1;
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  static addCount(count) {
    console.log(this.count + count);
  }

  fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

Person.addCount(10);
console.log(Person.count);

const person1 = new Person("Saiful Islam", "Sojib", 22);

console.log(person1);
console.log(person1.fullName());
