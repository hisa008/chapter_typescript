// function add(a: number, b: number){
//     return a + b    
// }
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function generateSequence() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/, 3];
        }
    });
}
console.log(generateSequence());
