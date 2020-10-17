// function add(a: number, b: number){
//     return a + b    
// }
// function add(a: number, b: number): number {
//     return a + b
// }
// console.log(add(10, 8))
// function greet(name: string) {
//     return 'hello' + name
// }
// console.log(greet('World'))
// let greed2 = function(name: string) {
//     return 'hello' + name
// }
// let greet3 = (name: string) => {
//     return 'hello' + name
// }
// let greet4 = (name: string) =>
//     'hello' + name
// let greet5 = new Function('name', 'return "hello" + name')
// console.log(greet5('World'))
// function log(message: string, userId?: string) {
//     let time = new Date().toLocaleTimeString()
//     console.log(time, message, userId || 'Not signed in')
// }
// log('Page loaded')
// log('User signed in', 'da763be') 
// function log(message: string, userId ='Not signed in') {
//     let time = new Date().toISOString()
//     console.log(time, message, userId)
// }
// log('User clicked on a button', 'da763be')
// log('User signed out')
// type Context = {
//     appId?: string
//     userId?: string
// }
// function log(message: string, context: Context = {}) {
//     let time = new Date().toISOString()
//     console.log(time, message, context.userId)
// }
// function sum(numbers: number[]): number {
//     return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sum([1, 2, 3]))
// function sumVariadic(): number {
//     return Array
//         .from(arguments)
//         .reduce((total, n) => total + n, 0)
// }
// console.log(sumVariadic(1, 2, 3))
// function sumVariadicSafe(...numbers: number[]): number {
//     return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sumVariadicSafe(1, 2, 3, 4, 5))
// interface Condole {
//     log(message?: any, ...optionalParams: any[]): void
// }
// function add(a: number, b: number): number {
//     return a + b
// }
// console.log(add.apply(null,[10, 20]))
// console.log(add.call(null, 10, 20))
// console.log(add.bind(null, 10, 20)())
// let x = {
//     a() {
//         return this
//     }
// }
// console.log(x.a)
// console.log(x.a)
// function fancyDate() {
//     return '${this.getMonth() + 1}/${this.getDate()}/${this.getFullyear()}'
// }
// console.log(fancyDate.call(new Date))
// function fancyDate(this: Date) {
//     return '${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}'
// }
// console.log(fancyDate.call(new Date))
// function* createFibonacciGenerator() {
//     let a = 0
//     let b = 1
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b]
//     }
// }
// let fibonacciGenerator = createFibonacciGenerator()
// console.log(fibonacciGenerator.next())
// function* generator(i) {
//     yield i;
//     yield i + 10;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// function add(a: number, b: number) {
//     return a + b
// }
// function area(radius: number): number | null {
//     if (radius < 0) {
//         return null
//     }
//     return Math.PI * (radius ** 2)
// }
// let r: number = 3
// let a = area(r)
// if (a !== null) {
//     console.info('result:', a)
// }
// // function greet(name: string)
// type Greet = (name: string) => string
// // function log(message: string, userId?: string)
// type Log = (message: string, userId?: string) => void
// // function sumVariadicSafe(...numbers: number[]): number
// type SumVariadicSafe = (...numbers: number[]) => nubmer
// type Log = (message: string, userId?: string) => void
// let log: Log = (
//     message,
//     userId = 'Not signed in'
// ) => {
//     let time = new Date().toISOString()
//     console.log(time, message, userId)
// }
// log('Hello')
// log('good', 'abcde')
function times(f, n) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}
times(function (n) { return console.log(n); }, 4);
