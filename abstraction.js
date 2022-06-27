// Abstraction
class Person {
  #year = new Date().getFullYear();
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  #fullName() {
    return `${this.fname} ${this.lname}`;
  }

  logger() {
    console.log(`${this.#fullName()} get a nobel in ${this.#year - 1}`);
  }
}

const person = new Person("Arif", "Islam", 22);

console.log(person);

person.logger();
