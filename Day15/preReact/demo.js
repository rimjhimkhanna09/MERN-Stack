// string literals
const myclg = "NIET";

//concatination
console.log("i am studying in " + myclg) 
//string literals
console.log(`i am studying in ${myclg}`);

// normal functiion
function add(a,b){
    return a+b;
}
console.log(add(2,3));

//arrow function 
const addA = (x,y) => x+y;
console.log(add(4,5));

//ternary operator
let speed = 55;
let message = speed > 60 ? "Please slow down" : "you are driving fastly"
console.log(message);

// destructuring objects
const person = {
    name : "Rimjhim",
    age : 22,
    hobbies : ["reading", "dancing"],
    nationality : "Indian",
    profession : "Engineer"
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[0]);

const {name,age,profession} = person;
console.log(name);
console.log(age);

//spread operator
const languages = ["java", "css", "html"];
console.log(languages);
const addlang = [...languages,"js", "python"];
console.log(addlang)

//rest operator
const [first, second, third,...rest] = ['aditya', 'kashish', 'kanishka','rimjhim','priya', 'dev'];
console.log(rest);
console.log(first);

//map function == iterate through nvididual item in array
addlang.map(items =>{
    console.log(items);
})

// slice function : does not modify original array and slice : modifies
const vegetables = ["carrot", "broccoli", "spinach", "potato"];
console.log(vegetables);
const slicedVeggies = vegetables.slice(1, 3); // slices from index 1
console.log(slicedVeggies);
console.log(vegetables);

const modifiedvegge = vegetables.splice(1,4);
console.log(modifiedvegge);
console.log(vegetables);


