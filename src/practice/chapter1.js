// let a: object = {
//     b: 'x'
// }
// a.b
// let a = {
//     b: 'x'
// }
// console.log(a.b)
// let b = {
//     c: {
//         d: 'f'
//     }
// }
// console.log(b.c)
// let a: {b: number} = {
//     b: 12
// }
// console.log(a.b)
// const a: {b: number} = {
//     b: 12
// }
// console.log(a.b)
// let c: {
//     firstName: string
//     lastName: string
// } = {
//     firstName: 'John',
//     lastName: 'barrowman'
// }
// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}
// }
// c = new Person('matt', 'smith')
// console.log(c)
// let a: {b: number}
// // a = {}
// a = {
//     b: 1,
//     c: 2
// }
// let a: {
//     b: number
//     c?: string
//     [key: number]: boolean
// }
// a = {b: 1}
// a = {b: 1, c: 'd'}
// console.log(a.c)
// let airplaneSeaingAssingnments: {
//     [seatNumber: string]: string
// } = {
//     '34D': 'Boris Cherny',
//     '34E': 'bill Gates'
// }
// let user: {
//     readonly firstName: string
// } = {
//     firstName: 'abby'
// }
// user.firstName
// user.firstName = 
//     'abbey with an e' //error 
// let danger: {}
// danger = {}
// console.log(danger)
// danger = {x: 1}
// console.log(danger)
// danger = []
// console.log(danger)
// danger = 2
// console.log(danger)
// type Age = number
// type Person = {
//     name: string
//     age: Age
// }
// let age: Age = 55
// let driver: Person = {
//     name: 'James May',
//     age: age
// }
// type Color = 'red'
// type Color = 'blue'
// type Color = 'red'
// let x = Math.random() < .5
// if (x) {
//     type Color = 'blue'
//     let b: Color = 'blue'
//     console.log(b)
// } else {
//     let c: Color = 'red'
//     console.log(c)
// }
// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wags: boolean}
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog
// let a: CatOrDogOrBoth = {
//     name: 'Bornkers',
//     purrs: true
// }
// a = {
//     name: 'Domino',
//     barks: true,
//     wags: true
// }
// a = {
//     name: 'Donkers',
//     barks: true,
//     purrs: true,
//     wags: true
// }
// let b: CatAndDog = {
//     name: 'Domino',
//     barks: true,
//     purrs: true,
//     wags: true
// }
// function trueOrNull(isTrue: boolean) {
//     if (isTrue) {
//         return 'true'
//     }
//     return null
// }
// type Returns = string | null
// function(a: string, b: number) {
//     return a || b
// }
var c = ['a'];
console.log(c);
