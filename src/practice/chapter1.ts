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



let airplaneSeaingAssingnments: {
    [seatNumber: string]: string
} = {
    '34D': 'Boris Cherny',
    '34E': 'bill Gates'
}

let user: {
    readonly firstName: string
} = {
    firstName: 'abby'
}

user.firstName
user.firstName = 
    'abbey with an e' //error 