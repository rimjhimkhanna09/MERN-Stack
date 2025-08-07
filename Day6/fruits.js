const fruits = ['🍎', '🥭', '🥝','🍎', '🥭', '🥝','🍎', '🥭', '🥝'];
console.log(fruits);

// practice usage of array loops conditionals and functions
// sort the fruits in the array and display them in fruits.html UI

for(i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
    if (fruits[i] == '🍎') {
        document.getElementById('a').textContent += '🍎'
    } else if (fruits[i] == '🥭') {
        document.getElementById('b').textContent += '🥭';
    } else if (fruits[i] == '🥝') {
        document.getElementById('c').textContent += '🥝';
    }
}

// ...existing code...
document.querySelector('span').textContent = fruits.join(', ');

// Display the length of the array in an element with id="length"
document.getElementById('length').textContent = fruits.length;

