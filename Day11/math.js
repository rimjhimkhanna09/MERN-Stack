function add(a, b) {
    return a + b;
}  
function multiply(a, b) {
    return a * b;
}
console.log(add(5, 10));
console.log(multiply(5, 10));
module.exports = {
    add: add,  
    multiply: multiply
 
};
 