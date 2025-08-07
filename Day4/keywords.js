a = true // hoinsting : declare a variable on top then host them 
console.log(a)
a = 22
console.log(a)

// var is global scope and can be redeclared
console.log(b)
var b = "college"

//let is lexical or function scope and we cannont redeclare it with let keywords
let course = "Full Stack"
console.log(course)

//const = constanr no change
const holiday = "sunday"
//holiday = "monday" // this will throw an error
console.log(holiday)

//if else
age = 19
if (age >= 18) {
    console.log("You can vote")
}else {
    console.log("You cannot vote")
}
// funtion 
z = document.getElementById("a");
console.log(z);
function abc() {
    if( z.textContent == "I am Learning Keywords"){
        z.textContent = "JavaScript is interesting!";
    }
    else{
        z.textContent = "I am Learning Keywords";
    }
}





