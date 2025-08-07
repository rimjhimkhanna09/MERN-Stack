console.log("Good Morning");

// array are in[] brackets and 0 index based
const city = ['Delhi', 'Noida', 'Gurgaon', 'Faridabad'];
console.log(city[0]);
console.log(city[1]);
let a = city.pop(); // removes the last element
console.log(a);
console.log(city);
city.push('Ghaziabad'); // adds an element at the end
console.log(city);

let b = city.shift(); // removes the first element
console.log(city);
console.log(b);
city.unshift('Agra'); // adds an element at the beginning
console.log(city);
console.log(city.reverse()); // reverses the array

// ...existing code...
// Display the first city in the span
document.querySelector('span').textContent = city[0];