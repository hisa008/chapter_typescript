// function add(a: number, b: number){
//     return a + b    
// }
var log = function (message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toISOString();
    console.log(time, message, userId);
};
log('Hello');
log('good', 'abcde');
