"use strict";

/* -------------------------------------------------------
    OOP -> Object Oriented Programming
------------------------------------------------------- */

/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- *

JS'de direkt obje oluşturabilirim (Class'a ihtiyaç duymadan.)
Obje isimlendirmede PascalCase veya camelCase isimledirme yapabiliriz.

const exampleObject = {

    propertyName: 'value', // property, attribute, field

    methodName: function () { // method
        return "bu bir method'dur"
    },

    methodNameAlternative() {
        return "bu da bir method'dur"
    }
}
Nokta ile içerdeki dataya ulaşabilirim. (Dot Notaion)
console.log( exampleObject.propertyName  )
console.log( exampleObject.methodName()  )
console.log( exampleObject.methodNameAlternative()  )

/* ------------------------------------------------------- *

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White', 'Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(parametre = 'default') {
        console.log(parametre)
        return 'Engine started.'
    }
}

console.log( Car.brand )
console.log( Car.colors )
console.log( Car.colors[0] )
console.log( Car.details )
console.log( Car.details.engineSize )
console.log( Car.startEngine() )
console.log( Car.startEngine('ok') )

Alternative Style:
console.log( Car['brand'] )
console.log( Car['colors'] )
console.log( Car['colors'][0] )
console.log( Car['details'] )
console.log( Car['details']['engineSize'] )
console.log( Car['startEngine']() )


/* ------------------------------------------------------- *
? 'THIS' KEYWORD

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White', 'Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function (parametre = 'default') {
        console.log(parametre)
        return 'Engine started.'
    },
    getDetails() {
        return this.details
        return this
        return this.startEngine()
    },
    arrowFunction: () => {
        //* Arrow functions is globalScope. (Not working this keyword in here.)
        return this
    }
}


console.log( Car.getDetails() ) // Functions are in localScope.
console.log( Car.arrowFunction() ) // ArrowFunctions ara in globalScope.

/* ------------------------------------------------------- *
? ARRAY DESTRUCTURING

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

const var0 = testArray[0]
const var1 = testArray[1]
const var2 = testArray[2]
const varOther = testArray.slice(3, 5)
console.log(var0, var1, var2, varOther)

? Sıralama Önemli.
const [var0, var1, var2, ...varOther] = testArray
console.log(var0, var1, var2, varOther)

? Rest Operatör (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda)
const [firstItem, secondItem, ...others] = testArray
console.log(firstItem, secondItem, others)

? Spread Operatör (Dağıtıcı) (Eşittirin sağ tarafında)
const newArray = [...testArray, 'value5', 'value6']


/* ------------------------------------------------------- *
? OBJECT DESTRUCTURING

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White', 'Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(parametre = 'default') {
        console.log(parametre)
        return 'Engine started.'
    }
}

? Sıralama önemli değil, key isimleri önemli.
? Rest Operator:
const { year, model, brand, ...others } = Car
console.log(year, model, brand, others)
? İsim değişikliği yapma:
const { year, model: newName, brand, ...others } = Car
console.log(year, newName, brand, others)
? Default değer atama:
const { year, model: newName, brand, type = 'default-value', ...others } = Car
console.log(year, newName, brand, type, others)

? Spread Operatör:
const newObj = {
    ...Car,
    newKey: 'new-value'
}
console.log(newObj)

? Object to JSON:
console.log(typeof Car, Car)
const json = JSON.stringify(Car)
console.log(typeof json, json)

? JSON to Object:
const obj = JSON.parse(json)
console.log(typeof obj, obj)

? Object to Array:
//* Keys:
const arrKeys = Object.keys(Car)
console.log(arrKeys)
//* Values:
const arrValues = Object.values(Car)
console.log(arrValues)
//* Entries:
const arrEntries = Object.entries(Car)
console.log(arrEntries)

/* ------------------------------------------------------- *
? CONSTRUCTOR FUNCTIONS:

const constructorFunction = function () {

    this.property1 = 'value1'
    this.property2 = 'value2'

}

/* ------------------------------------------------------- *
? 'NEW' KEYWORD:

const carConstructor = function (brand, model, year) {

    this.brand = brand
    this.model = model
    this.year = year
    this.isAutoGear = true
    this.colors = ['White', 'Red']

    this.startEngine = function (methodParam) {
        return ('Engine started.')
    }
}

const Ford = new carConstructor('Ford', 'Mustang', 1967)
console.log(typeof Ford, Ford)
console.log(Ford.brand)
console.log(Ford.startEngine())

const Mercedes = new carConstructor('Mercedes', 'CLK200', 2001)
console.log(Mercedes)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `The name of the animal is ${this.name} and age is ${this.age}`;
  }
}

// const firstAnimal = new Animal('Rex', 2)
// console.log(firstAnimal)
// console.log(firstAnimal.getInfo())

// const secondAnimal = new Animal('Barney', 5)
// console.log(secondAnimal)
// console.log(secondAnimal.getInfo())

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age)
//         this.breed = breed
//     }

//     bark() {
//         return 'woof'
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, weight) {
//         super(name, age)
//         this.weight = weight
//     }
// }

// const myDog = new Dog('Rex', 2, 'German Shepard')
// console.log(myDog.getInfo())
// console.log(myDog.breed)
// console.log(myDog.bark())

// const myCat = new Cat('Whiskers', 5, '5kg')
// console.log(myCat.getInfo())
// console.log(myCat.weight)

// class Cat extends Animal {
//     #weight;
//     constructor(name, age, weight) {
//         super(name, age)
//         this.#weight = weight
//     }
//     getWeight() {
//         return this.#weight
//     }
//     setweight(weight) {
//         this.#weight = weight
//     }
// }

// const myCat = new Cat('Whiskers', 5, '5kg')
// console.log(myCat.getWeight())
// myCat.setweight('6kg')
// console.log(myCat.getWeight())

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   makeSound() {
//     return `Some nice sound made`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age);
//     this.breed = breed;
//   }

//   makeSound() {
//     return 'woof';
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, weight) {
//     super(name, age);
//     this.weight = weight;
//   }

//   makeSound() {
//     return 'meow';
//   }
// }
// const myDog = new Dog('Rex', 2, 'German Sh.');
// const myCat = new Cat('Whiskers', 5, '5kg');

// console.log(myDog.makeSound());
// console.log(myCat.makeSound());

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
? OOP: Object Oriented Programming
? DRY: Don't Repeat Yourself
? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
? CLASS: Obje türetmek için kullanılacak şablon.

//*Class Decleration:
class PascalCaseClassName {

}

//* Class Expression:
const PascalCaseClassName = class {
    propertyName = 'value' // property, attribute, field
    undefinedProperty // sadece tanımlama yapabiliriz. (değeri undefined olur.
    mrthodName1() {
        return 'method'
    }
}
/* ---------------------------------------------------*/
//? INSTANCE * Bir class'tan üretilen objedir.

// class Car {
//   isRunning = false;

//   //* Class içine gönderilen parametreleri almak için "constructor" methodu kullanılır.

//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine(param1) {
//     console.log(param1);
//     return "Motor Çalıştı";
//   }
// }

// const PascalCaseInstanceName = new Car()
// console.log(PascalCaseInstanceName)
// console.log(PascalCaseInstanceName.isRunning)
// console.log(PascalCaseInstanceName.runEngine('test-value'))

// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford);

// const Mercedes = new Car('Mercedes', 'CLK200', 2010)
// console.log(Mercedes)

// console.log(Ford.isRunning)
// Ford.isRunning = true
// console.log(Ford.isRunning)
// console.log(Mercedes.isRunning)

/* ---------------------------------------------------*/
// //? INHERITANCE: MİRAS ALMA. BAŞKA BİR CLASS ' IN TÜM ÖZELLİK/METHODLARINI  DEVRALMA.
// //?SUPER: Parent (Üst) Class - THIS: Child (Alt) Class

// class Vehicle {
//   vehicleIsActive = false;
//   constructor(vehicleType) {
//     this.vehicleType = vehicleType;
//   }
// }
// class Car extends Vehicle {

//   isRunning = false;

//   //* Class içine gönderilen parametreleri almak için "constructor" methodu kullanılır.

//   constructor(brand, model, year, vehicleType = 'Car') {
//     super(vehicleType)
//     //!super() parametresi parent-vclass ' ı ifade eder. Her zman üstte olmalı.
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine(param1) {
//     console.log(param1);
//     return "Motor Çalıştı";
//   }
// }
// const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
// console.log(Ford)

// class Accessory extends Car {
//     constructor(accessoryName,brand, model, year) {
//         super(brand, model, year)
//         this.accessoryNmae = accessoryName
//     }
// }

// const FordClimate = new Accessory( 'Bosh Climate','Ford', 'Mustang', 1967)
// console.log(FordClimate)


/* ---------------------------------------------------*
? POLYMORPHISM: Miras aldığımız class'ın özellik ve metodlarını yeniden yazılabilmesi.
? - Override: Üst metodla aynı isim ve yapıda yeni bir method yazma. (ezme / iptal etme / önceliği alma)
? - Overload: Üst metodla aynı isimde ama farklı yapıda yeni bir method yazma. (her ikisi de aynı anda aktif.) (JS Overload desteklemez.)

class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
    getDetails() {
        console.log('Vehicle içindeki getDetails çalıştı.')
        return this.vehicleType
    }

}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1) {
        this.isRunning = true
        return 'Motor Çalıştı'
    }

}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car' )
console.log(Ford)
console.log(Ford.getDetails())


    ? Overload: Üstteki methodun aynı isim ama farklı parametre adet/tip ile yeniden tanımlanması.
    ? JS Desteklemez. TypeSctrip destekler.
    ? Çalışma prensibi: Çağrıldığı zaman parametreye göre ilgili method çalışır.
    getDetails(parametre1, parameter2) {
        return this
    }

    const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
    console.log(Ford)
    console.log(Ford.getDetails())

/* ---------------------------------------------------*/
//? Access Modifiers
//? PUBLIC: Genel erişime açık.(Parent: Yes, Child:Yes, Instance:Yes)
//? PROTEDTED(_): Sadece tanımlı olduğu class ve inherit edilen class içinden erişebilir. (Parent: Yes, Child: Yes, Instance: No)
//? PRIVATE(#): Sadece tanımlı olduğu class içinden erişebilir. (Parent: Yes, Child: No, Instance: No)

// class Vehicle {
//     vehicleIsActive = false // PUBLIC PROPERTY

     //? JS "protected" desteklemez:
//     _protectedProperty = 'protected-value' //PROTECTED PROPERTY
//     _protectedMethod() {return this} // PROTECTED METHOD
//     #privateProperty = 'private-value' // PRIVATE PROPERTY
//     #privateMethod () {return this} //PRIVATE METHOD
//     constructor(vehicleType) {
//         this.vehicleType = vehicleType
//     }
//     getDetail() {
//         console.log('Vehicle içindeki getDetails çalıştı.')
//         return this.vehicleType
//     }
// }

// class Car extends Vehicle {

//     isRunning = false

//     constructor(brand, model, year, vehicleType = 'Car') {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine(param1) {
//         this.isRunning = true
//         return 'Motor Çalıştı'
//     }

//     getDetails() {

//         console.log('Public', this.vehicleType) // Public: Class Erişebilir.
//         console.log('Protected', this.protectedProperty) //Protected: Class Erişebilir.
//         console.log('Protected', this._protectedProperty) //Protected: Class Erişebilir.
//         console.log('Private', this.privateProperty) // Private: Class Erişemez.
//         // console.log('Private', this.#privateProprty) 
//         console.log('Car içindeki getDetails çalıştı.')
//         return super.getDetails()
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
// console.log(Ford)
// console.log(Ford.vehicleIsActive) // Public: Instance Erişti.
// console.log(Ford.protectedProperty) // Protected: Instance Erişmez.
// console.log(Ford.privateProperty) // Private: Instance Erişmez.
// console.log(Ford.getDetails())
/* ---------------------------------------------------*/
//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan methodlardır.
//? "STATIC" KEYWORD: Class' dan direkt erişim. (Instance erişemez.)

// class Car {

//     isRunning = false
//     #price = 999

//     constructor(brand, model, year, vehicleType = 'Car') {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine(param1) {
//         this.isRunning = true
//         return 'Motor Çalıştı'
//     }
    
//     getDetails() { // getter method
//         console.log('Car içindeki getDetails çalıştı.')
//         return super.getDetails()
//     }

//     get getPrice() {
//         console.log('Fiyat görüntülendi.')
//         return this.#price
//     }

//     set setPrice(newPrice) {
//         console.log('Fiyat güncellendi.')
//         this.#price = newPrice
//         return this.#price
//     }

    //? Direkt class'tan erişmek için "static" keyword kullanılabilir.
    //? "static" ile tanımlanmış değere instance'dan erişemeyiz.
//     static staticProp = 'static-value'
//     static staticMethod() {
//         return 'static-method'
//     }

// }

// const Ford = new Car('Ford', 'Mustang', 1967, 'Car')

// console.log(Ford.price) // undefined
// console.log(Ford.getPrice) // getter  metodlar property gibi çağrılır.
// Ford.setPrice = 2000 // setter  metodlar property gibi güncellenir.
// console.log(Ford.setPrice(2000)) // setter methodlar artık bir normal method gibi çalışmaz.
// console.log(Ford.getPrice)

// console.log(Car.staticProp) // Direkt class'tan erişim.
// console.log(Car.staticMethod())
// console.log(Ford.staticProp) // Instance erişemez. (hata verir)
// console.log(Ford.staticMethod())

/* ------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

//* HAPPY CODDING :)

