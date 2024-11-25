console.log('S02');
console.log('payas');
//* Union type
let a = 0.325;
a = 'Hello';
// a = false // compiler error
//* Type Narrowing
function checkNumber(n) {
    if (typeof n === 'number') {
    }
    else { }
}
let c = 'Selam';
c = 2;
let pet1 = "cat";
let pet2 = "dog";
let car1 = "BMW";
let car2 = "Audi";
// let car3: Car = "Fiat"  // compiler error
let car4 = 2022;
//* Object
const car = {
    type: "Honda",
    model: "CRV",
    year: 2020,
    // hatchback: true  //compiler error
};
const elevatedUser = {
    id: 1,
    name: 'Mark',
    privileges: ['start-database'],
};
let sale1 = {
    author_id: 123,
    book_id: 456,
    book_name: "Return of the King",
    author_name: "Tolkein",
    // price 200 // compiler error
};
// sale1.book_id = 1 // compiler error
//* Type Assertions
// let someValue: unknown = "this is a string"
// console.log(someValue.length) // object is type of 'unknown'
let someValue1 = "this is a string";
console.log(someValue1.length);
let someValue2 = "this is a string";
console.log(someValue2.length);
// console.log(someValue2.length) // compiler error
//* Functions
function selamla(mesaj, isim = 'konuk') {
    // if(!isim) isim = "Konuk"
    return mesaj + ' ' + isim;
}
console.log(selamla("Merhaba", "Dünya"));
// console.log(selamla ("Merhaba", 2024)), // compiler error
// console.log(selamla ("Merhaba"), // compiler error)
// selamla ("Merhaba", "dünya", 2024) // compiler error
//* Arrow Function
let topla = (a, b) => a + b;
function add(a, b) {
    return a + b;
}
//* Rest Parameters
function add1(num, ...numbers) {
    let total = num;
    numbers.forEach(number => total += number);
    console.log(total);
}
add1(1);
add1(1, 2, 3, 4, 5);
const red = { color: { r: 255, g: 0, b: 0 } };
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq1 = new Square({ r: 255, g: 0, b: 0 }, 255);
console.log(sq1);
//* Generic
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["John", "Mike", "Alan"]);
// strArr.push(3) //error
// numArr.push("Sally") //error
let employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
employee.push([4, "Mark"]);
console.log(employee);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let selectedColor = Color1.Green;
console.log(selectedColor);
let looselyTyped = 4;
let arr = ["John", 212, true];
let notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
let unknownVAr;
unknownVAr = false;
unknownVAr = 15;
unknownVAr = "Hello World";
unknownVAr = ["1", "2", "3", "4", "5"];
unknownVAr = { userNAme: "admin", password: "123x" };
unknownVAr = null;
unknownVAr = undefined;
// let value: unknown;
// let newValue1: boolean = value;
// let newValue2: number = value;
// let newValue3: string = value;
// let newValue4: object = value;
// let newValue5: any[] = value;
// let newValue6: Function = value;
function warnUser() {
    console.log("This is my warning message");
}
function error(message) {
    throw new Error(message);
}
console.log("S03");
let code;
code = 123;
code = "ABC";
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
let pet3 = "cat";
let pet4 = "dog";
const elevatedUser2 = {
    id: 1,
    name: "Mark",
    privileges: ["start-database"],
};
// function Greet(greeting: string, name: string): string {
//     return greeting + " " + name + "!"
// }
// Greet("Hello", "Steve");
// Greet("Hi");
// Greet ("Hi", "Bill", "Gates");
// function Greet1(greeting: string, name?: string): string {
//     return greeting + " " + name + "!"; 
// }
// Greet("Hello", "Steve");
// Greet("Hi");
// Greet("Hi", "Bill", "Gates")
