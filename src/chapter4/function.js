// function add(a: number, b: number){
//     return a + b    
// }
function log(message, context) {
    if (context === void 0) { context = {}; }
    var time = new Date().toISOString();
    console.log(time, message, context.userId);
}
log('taro');
