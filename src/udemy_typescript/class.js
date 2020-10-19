var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("hello! my name is " + this.name + ". I am " + this.age + " years old");
    };
    return Person;
}());
var mike = new Person('Mike', 30);
mike.name = 'takashi';
mike.age = 39;
mike.greeting();
mike.incrementAge();
// console.log(mike)
var anotherQuill = {
    anotherGreeting: mike.greeting
};
// anotherQuill.anotherGreeting();
