// black --> yellow --> black 
let box = document.querySelector('div');
console.log(box);
function changeColor() {
    if (box.style.backgroundColor == 'black') {
        box.style.backgroundColor = 'yellow';
    } 
    else if (box.style.backgroundColor == 'yellow') {
        box.style.backgroundColor = 'blue';
    } 
    else if (box.style.backgroundColor == 'blue') {
        box.style.backgroundColor = 'green';
    } 
    else {
        box.style.backgroundColor = 'black';
    }
}

