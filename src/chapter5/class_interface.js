// class Game {} // チェスのゲームを表す
// class Piece {} // チェスの駒
// class Position {} // 駒の座標
// class King extends Piece {} // キング
// class Queen extends Piece {} // クイーン
// class Bishop extends Piece {} // ビショップ
// class Knight extends Piece {} // ナイト
// class Rook extends Piece {} // ルーク
// class Pawn extends Piece {} // ポーン
// type Color = 'Black' | 'White'
// type File1 = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 
// class Position1 {
//     constructor(
//         private file: File1,
//         private rank: Rank
//     ) {}
// }
// class Piece1 {
//     protected position: Position
//     constructor(
//         private readonly color: Color,
//         file: File1,
//         rank: Rank
//     ) {
//         this.position = new Position(file, rank)
//     }
// }
// class Position {
//     distanceFrom(position: Position) {
//         return {
//             rank: Math.abs(position.rank - this.rank),
//             file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeat(0))
//         }
//     }
// }
// class king extends Piece {
//     canMobeTo(position: Postion) {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.file < 2
//     }
// }
// let set = new Set
// set.add(1).add(2).add(3)
// set.has(2)
// set.has(4)
// console.log(set.has(3))
// type Sushi = {
//     calories: number
//     salty: boolean
//     tasty: boolean
// }
// interface Sushi {
//     calories: number
//     salty: boolean
//     tasty: boolean
// }
// type Cake = {
//     calories: number
//     salty: boolean
//     tasty: boolean
// }
// type Food = {
//     calories: number
//     tasty: boolean
// }
// type Sushi = Food & {
//     salty: boolean
// }
// type Cake = Food & {
//     sweet: boolean
// }
// interface Food {
//     calories: number
//     tasty: boolean
// }
// interface Sushi extends Food {
//     salty: boolean
// }
// interface Cake extends Food {
//     sweet: boolean
// }
// type A = number
// type B = A | string
// interface A {
//     good(x: number): string
//     bad(c: number): string
// }
// interface B extends A {
//     good(x: string | number): string
//     bad(x: string): string
// }
