console.log("good morning");

let age = 40
while(age < 51) {
    age = age + 3;
}
console.log("Age is: " + age); // 52

// array 
const fruits = ["apple", "banana", "orange", "kiwi"];
console.log(fruits)
x = fruits.pop(); // removes the last element
console.log("Removed fruit: " + x);
console.log(fruits);

fruits.push("mango"); // adds a new element at the end
console.log(fruits);
fruits.shift(); // removes the first element
console.log(fruits);
fruits.unshift("grape"); // adds a new element at the beginning
console.log(fruits);
z = fruits.reverse(); // reverses the order of the array
console.log("Reversed fruits: " + z);

console.log(Math.PI)
console.log(Math.max(10, 20, 30)); // returns the largest of the numbers
console.log(Math.random()); // generates a random number between 0 and 1    
console.log(Math.floor(Math.random() * 100)); // generates a random number between 0 and 99
console.log(Math.ceil(Math.random() * 100)); // generates a random number between 1 and 100
function otpno() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10); // generates a random digit
    }
    document.querySelector("span").textContent = otp; // displays the OTP in the span element
}

