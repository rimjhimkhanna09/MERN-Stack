const fruit = "xyz";
switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    case "orange":
        console.log("Orange is orange.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}
// This code checks the value of the variable 'fruit' and logs a message based on its
let box = document.querySelector("div");
console.log(box);


function color(){
    const mycolor = box.style.backgroundColor;
    switch (mycolor) {
        case "yellow":
            box.style.backgroundColor = "red";
            break;
        case "red":
            box.style.backgroundColor = "darkblue";
            break;
        case "darkblue":
            box.style.backgroundColor = "green";
            break;
        case "green":
            box.style.backgroundColor = "pink";
            break;
        default:
            box.style.backgroundColor = "yellow";
            break;
    }
}