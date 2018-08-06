// var add = function(x, y){
//     return x+y;
// }
const add = (x, y) => x+y;
const minus = (x, y) => x-y;
const mul = (x, y) => x*y;
const div = (x, y) => x/y;
const calc = {sum:add, minus:minus, mul, div}
module.exports = calc;