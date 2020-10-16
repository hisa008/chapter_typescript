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





