// let hello: string = 'Hello'
// console.log(hello)
// let hasValue: boolean = true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';
// let anything = 10;
// const person = {
//     name: {
//         first: 'Jack',
//         last: 'Mike'
//     },
//     age: 21
// }
// const fruits = ['Apple', 'Banana', 'Grape']
// const book: [string, number, boolean] = ['business', 1500, false]
// console.log(person.name.first)
// enum CoffeeSize {
//     Short = 'Short',
//     Tall = 'Tall',
//     Grande = 'Grande',
//     Venti  = 'Venti'
// }
// const coffee = {
//     hot: true,
//     size: CoffeeSize.Tall
// }
// coffee.size = CoffeeSize.Short;
// console.log(CoffeeSize.Short)
// let unionType: number | string = 10;
// unionType = 'hello';
// unionType.toUpperCase();
// console.log(unionType)
// type ClothSize = 'small' | 'medium' | 'large'
// function add(num1: number, num2: number): number {
//     return num1 + num2
// }
// add(3, 5)
// function Sayhello(): void {
//     console.log('hello')
// }
// console.log(Sayhello())
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// const anotherAdd: (n1: number, n2: number) => number = add;
// const doubleNumber = number => number * 2
// console.log(doubleNumber(4))
// function doubleAndHandle(num: number, cb: (num1: number) => number): void {
//     const doubleNum =  cb(num * 2);
//     console.log(doubleNum);
// }
// doubleAndHandle(5, doubleNum => {
//     return doubleNum
// });
// let unknownInput: unknown;
// let text: any;
// unknownInput = text;
// function error(message: string): never {
//     throw new Error(message);
// }
// console.log(error('helle'));
var hello = 'hello';
hello = hello.toUpperCase();
console.log(hello);
