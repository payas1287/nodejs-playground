console.log('S02')
console.log('payas')

//* Union type

let a: string | number = 0.325
a = 'Hello'
// a = false // compiler error

//* Type Narrowing

function checkNumber(n: (string | number)): void {


    if (typeof n === 'number') {

    } else { }
}

//* Type Aliases

type Mark = string | number

let c: Mark = 'Selam'
c = 2
// c = true // compiler error

//* String Literals

type Pet = 'cat' | 'dog'

let pet1: Pet = "cat"
let pet2: Pet = "dog"


type Car = "BMW" | "Audi" | "Mercedes" | 2022

let car1: Car = "BMW"
let car2: Car = "Audi"
// let car3: Car = "Fiat"  // compiler error
let car4: Car = 2022



//* Object

const car: {
    type: string,
    model: string,
    readonly year: number,
} = {
    type: "Honda",
    model: "CRV",
    year: 2020,
    // hatchback: true  //compiler error
}
// car.year = 2023 //readonly error


//*Intersection


type User = {
    id: number;
    name: string;
};
type Admin = {
    privileges: string[]
};

type SuperUser = User & Admin;

const elevatedUser: SuperUser = {
    id: 1,
    name: 'Mark',
    privileges: ['start-database'],
};

type Book = {
    readonly book_id: number,
    book_name: string
}

type Author = {
    author_id: number,
    author_name: string
}


type Sales = Book & Author

let sale1: Sales = {
    author_id: 123,
    book_id: 456,
    book_name: "Return of the King",
    author_name: "Tolkein",
    // price 200 // compiler error
}

// sale1.book_id = 1 // compiler error

//* Type Assertions

// let someValue: unknown = "this is a string"
// console.log(someValue.length) // object is type of 'unknown'

let someValue1: unknown = "this is a string"
console.log((<string>someValue1).length)

let someValue2: unknown = "this is a string"
console.log((someValue2 as string).length)

// console.log(someValue2.length) // compiler error




//* Functions

function selamla(mesaj: string, isim: string = 'konuk'): string {
    // if(!isim) isim = "Konuk"
    return mesaj + ' ' + isim
}

console.log(selamla("Merhaba", "Dünya"))
// console.log(selamla ("Merhaba", 2024)), // compiler error
// console.log(selamla ("Merhaba"), // compiler error)
// selamla ("Merhaba", "dünya", 2024) // compiler error


//* Arrow Function


let topla = (a: number, b: number): number => a + b

//* Functions - Overloading

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any): any {
    return a + b
}

//* Rest Parameters

function add1(num: number, ...numbers: number[]): void {
    let total = num;
    numbers.forEach(number => total += number)
    console.log(total)
}
add1(1)
add1(1, 2, 3, 4, 5)


//* Interface

interface Color {
    color: { r: number, g: number, b: number };
}
const red: Color = { color: { r: 255, g: 0, b: 0 } }


interface Shape {
    area: number;
}

class Square implements Color, Shape {
    constructor(public color: { r: number, g: number, b: number }, public area: number) { }
}
const sq1 = new Square({ r: 255, g: 0, b: 0 }, 255)
console.log(sq1)

//* Generic

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray([1, 2, 3, 4])
let strArr = getArray(["John", "Mike", "Alan"])
// strArr.push(3) //error
// numArr.push("Sally") //error

let employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
employee.push([4, "Mark"])
console.log(employee)

enum Color1 {
    Red, Green, Blue,
}
let selectedColor: Color1 = Color1.Green;
console.log(selectedColor)

let looselyTyped: any = 4;
let arr: any[] = ["John", 212, true];

let notSure: unknown = 4;
notSure = "maybe a string instead";
console.log(notSure)

let unknownVAr: unknown

unknownVAr = false;
unknownVAr = 15;
unknownVAr = "Hello World";
unknownVAr = ["1", "2", "3", "4", "5"]
unknownVAr = {userNAme: "admin", password: "123x"}
unknownVAr = null
unknownVAr = undefined

// let value: unknown;
// let newValue1: boolean = value;
// let newValue2: number = value;
// let newValue3: string = value;
// let newValue4: object = value;
// let newValue5: any[] = value;
// let newValue6: Function = value;


function warnUser(): void {
    console.log("This is my warning message")
}

function error(message: string): never {
    throw new Error(message)
}

console.log("S03")



let code: string | number;
code = 123;
code = "ABC"
// code = false;

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({x:100, y:100});

type pet = "cat" | "dog";

let pet3: pet = "cat";
let pet4: pet = "dog";
// let gator: pet = "horse";


type User1 = {
    id: number;
    name: string
};

type Admin1 = {
    privileges: string[];
};

type SuperUser1 = User & Admin;

const elevatedUser2: SuperUser = {
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