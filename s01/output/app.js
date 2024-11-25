console.log('Hello TS');
class Person {
    constructor() {
        this.id = 1;
        this.firstName = "Mark";
        this.lasName = "Maddison";
    }
}
const mark = new Person();
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log(this.k);
    }
}
class Employee {
}
let emp = new Employee();
class Person1 {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Person2 {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}
const b = (x, y) => x * y;
console.log(b(5, 3));
