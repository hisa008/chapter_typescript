// let hello: string = 'Hello'
// console.log(hello)

// let hasValue: boolean = true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';

// let anything = 10;




const person = {
    name: {
        first: 'Jack',
        last: 'Mike'
    },
    age: 21
}

const fruits = ['Apple', 'Banana', 'Grape']

const book: [string, number, boolean] = ['business', 1500, false]

console.log(person.name.first)

enum CoffeeSize {
    Short = 'Short',
    Tall = 'Tall',
    Grande = 'Grande',
    Venti  = 'Venti'
}

const coffee = {
    hot: true,
    size: CoffeeSize.Tall
}

coffee.size = CoffeeSize.Short;
console.log(CoffeeSize.Short)

let unionType: number | string = 10;
unionType = 'hello';
unionType.toUpperCase();

console.log(unionType)