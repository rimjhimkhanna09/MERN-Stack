// json is superset of object useful for transporting data{ "" : "" }
console.log("console");
console.log(typeof console);

const person = [{
    name: "Rimjhim",
    age: 21,
    isStudent: true,
    hobbies: ['reading', 'coding', 'gaming'],
    cityDetails: {
        name: "Delhi",
        landmarks: ['Red Fort', 'India Gate', 'Qutub Minar']
    },
    nationality: "Indian",
    gender : "female",
} , {
    name: "Rohan",
    age: 22,
    isStudent: false,
    hobbies: ['traveling', 'photography'],
    cityDetails: {
        name: "Noida",
        landmarks: ['Great India Place', 'DLF Mall of India', 'Worlds of Wonder']
    }
}
]
//document.getElementById('a').textContent += person[1].name;
//document.getElementById('b').textContent += person[1].hobbies[0];
// document.getElementById('c').textContent += person[1].cityDetails.name;
document.querySelector('h2').textContent += person[1].name;
document.querySelectorAll('h2')[1].textContent += person[1].hobbies[0];
document.querySelectorAll('h2')[2].textContent += person[1].cityDetails.name;

console.log(person);
console.log(typeof person);
