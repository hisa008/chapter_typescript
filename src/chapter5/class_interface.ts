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


