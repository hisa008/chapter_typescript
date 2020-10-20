// class Person {
//     name: string;
//     private age: number;
//     constructor(initName: string, initAge: number) {
//         this.name = initName;
//         this.age = initAge;
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     incrementAge(){
//         this.age += 1;
//     }
//     greeting(this: Person) {
//         console.log(`hello! my name is ${this.name}. I am ${this.age} years old`);
//     }
// }
// const mike = new Person('Mike', 30);
// mike.name = 'takashi';
// // mike.age = 39;
// mike.greeting();
// mike.incrementAge();
// // console.log(mike)
// const anotherQuill = {
//     anotherGreeting: mike.greeting
// }
// // anotherQuill.anotherGreeting();
// class Person {
//     constructor(public name: string, private age: number) {
//     }
//     incrementAge() {
//         this.age += 1;
//     }
//     greeting(this: Person) {
//         console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
//     }
// }
// const mike = new Person('Mike', 19);
// mike.incrementAge();
// mike.greeting();
// class Person {
//     constructor(public name: string, protected age: number) {
//     }
//     incrementAge() {
//         this.age += 1;
//     }
//     greeting(this: Person) {
//         console.log(`hello! My name is ${this.name}. I am ${this.age} years old`)
//     }
// }
// class Teacher extends Person {
//     get subject() {
//         if(!this._subject) {
//             throw new Error('There is no subject');
//         }
//         return this._subject;
//     }
//     set subject(value) {
//         this._subject = value;
//     }
//     constructor(name: string, age: number, private _subject: string) {
//         super(name, age);
//     }
//     greeting() {
//         console.log(`hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
//     }
// }
// const teacher = new Teacher('John', 51, 'Math');
// console.log(teacher.subject);
// teacher.subject = 'faf';
// teacher.greeting();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 18)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("hello! My name is " + this.name + ". I am " + this.age + " years old");
    };
    Person.species = 'Homo sapiens';
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.greeting = function () {
        console.log("hello! My name is " + this.name + ". I am " + this.age + " years old. I teach " + this.subject);
    };
    return Teacher;
}(Person));
console.log(Person.species);
console.log(Person.isAdult(30));
