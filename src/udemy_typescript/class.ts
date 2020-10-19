class Person {
    name: string;
    private age: number;
    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    incrementAge(){
        this.age += 1;
    }
    greeting(this: Person) {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old`);
    }
}

const mike = new Person('Mike', 30);
mike.name = 'takashi';
// mike.age = 39;
mike.greeting();
mike.incrementAge();
// console.log(mike)


const anotherQuill = {
    anotherGreeting: mike.greeting
}

// anotherQuill.anotherGreeting();