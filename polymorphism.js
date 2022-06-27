// Polymorphism
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
  doYourWork() {
    console.log("Do anything");
  }
}

// sub Class 1
class Student extends Person {
  constructor(fname, lname, age, id) {
    super(fname, lname, age);
    this.id = id;
  }

  doYourWork() {
    console.log("Read The Book");
  }
}

const student = new Student("Saiful Islam", "Sojib", 22, 1);

console.log(student);
console.log(student.fullName());
student.doYourWork();

// sub Class 2
class BusinessMan extends Person {
  constructor(fname, lname, age, phone) {
    super(fname, lname, age);
    this.phone = phone;
  }

  doYourWork() {
    console.log("Sell The Product");
  }
}

const businessMan = new BusinessMan("Arif", "Nur", 30, "017********");

console.log(businessMan);
console.log(businessMan.fullName());
businessMan.doYourWork();
