// Inheritance
// Parent Class
class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

// sub Class
class Student extends Person {
  constructor(fname, lname, age, id) {
    super(fname, lname, age);
    this.id = id;
  }

  reading() {
    console.log("I am Reading a book");
  }
}

const student = new Student("Saiful Islam", "Sojib", 22, 1);

console.log(student);
console.log(student.fullName());
student.reading();
