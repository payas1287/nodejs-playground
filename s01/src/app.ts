console.log('Hello TS')


class Person {
     id = 1;
     firstName = "Mark";
     lasName = "Maddison"
}
const mark = new Person()



class Base {
    k = 4;
  }
   
  class Derived extends Base {
    constructor() {
        super();
    
      console.log(this.k);
      
    }
  }

  class Employee {
    public id: string;
    name: string;
}

let emp = new Employee();


class Person1 {
    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}


class Person2 {
    // No code is necessary for declaration of class members
    constructor(
        private firstName: string,
        private lastName: string,
        private readonly id: string) {
    }
}


const b = (x,y)=>x*y
console.log(b(5,3))