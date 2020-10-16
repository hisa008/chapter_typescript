// let c: string[] = ['a']
// let f: ['red']
// let c: string = 'a'
// // f.push('blue')
// console.log(typeof(c))


// let d = [1, 'a']

// let x = d.map(_ => {
//     if (typeof _ === 'number') {
//         return _ * 3
//     }
//     return _.toUpperCase()
// })

// console.log(x)

// function buildArray() {
//     let a = []
//     a.push(1)
//     console.log(typeof(a))
//     a.push('x')
//     console.log(typeof(a))
//     console.log(a)
//     return a
// }

// // buildArray();

// let myArray = buildArray()
// myArray.push(true)




// let a: [number] = [1]

// let b: [string, string, number] = ['malcolm', 'gladwell', 1963]
// console.log(b)

// b = ['queen', 'elizabeth', 1926]
// console.log(b)




// let trainFares: [number, number?][] = [
//     [3.75],
//     [8.25, 7.70],
//     [10.50]
// ]

// console.log(trainFares)




// let as: readonly number[] = [1, 2, 3]
// let bs: readonly number[] = as.concat(4)
// let three = bs[2]

// console.log(bs)




// type A = readonly string[]
// type B = ReadonlyArray<string>
// type C = Readonly<string[]>

// type D = readonly [number, string]
// type E = Readonly<[number, string]>



// function a(x: number) {
//     if (x < 10) {
//         return x
//     }
//     return null
// }

// function b() {
//     return undefined
// }

// function c(){
//     let a = 2 + 2
//     let b = a * a
// }

// function e(){
//     throw TypeError('I always error')
// }

// // function f(){
// //     while (true) {
// //         doSomething()
// //     }
// // }

// console.log(a(11))
// console.log(a(5))
// console.log(b)
// console.log(c)
// console.log(e)
// console.log(f)




// enum Language {
//     English,
//     Spanish,
//     Russian
// }


// enum Language {
//     English = 0,
//     Spanish = 1,
//     Russian = 2
// }

// let myFirstLanguage = Language.Russian
// let mySecondLanguage = Language['English']

// enum Color {
//     red,
//     blue,
//     green
// }

// console.log(Color.green)



// enum Language {
//     English,
//     Spanish,
//     Russian
// }

// let a = Language.English
// // let b = Language.Tagalog
// let c = Language[0]
// let d = Language[6]

// console.log(c)
// console.log(d)



// const enum Flippable {
//     Burger,
//     Chair,
//     Cup,
//     Skateboard,
//     Table
// }

// function flip(f: Flippable) {
//     return 'flipped it'
// }

// console.log(flip(Flippable.Chair))
// console.log(flip(Flippable.Cup))
// console.log(flip(12))



const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}

function flip(f: Flippable) {
    return 'flopped it'
}

console.log(flip(Flippable.Chair))
console.log(flip(Flippable.Cup))
// console.log(flip(12))
// console.log(flip(Flippable.Chair))