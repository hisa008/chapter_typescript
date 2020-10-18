// let hello: string = 'Hello'
// console.log(hello)
// let hasValue: boolean = true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';
// let anything = 10;
var person = {
    name: {
        first: 'Jack',
        last: 'Mike'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
console.log(person.name.first);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["Short"] = "Short";
    CoffeeSize["Tall"] = "Tall";
    CoffeeSize["Grande"] = "Grande";
    CoffeeSize["Venti"] = "Venti";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.Tall
};
coffee.size = CoffeeSize.Short;
console.log(CoffeeSize.Short);
var unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
console.log(unionType);
