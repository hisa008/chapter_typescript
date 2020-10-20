// class Person {
//     name: string;
//     private age: number;
//     constructor(initName: string, initAge: number) {
//         this.name = initName;
//         this.age = initAge;
//     }

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





class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 18) return true;
        return false;
    }
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    greeting(this: Person) {
        console.log(`hello! My name is ${this.name}. I am ${this.age} years old`)
    }
}


class Teacher extends Person {
    constructor(name: string, age: number, private subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
    }
}

console.log(Person.species);
console.log(Person.isAdult(30));