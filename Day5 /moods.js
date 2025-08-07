let pic = document.getElementById("img");
console.log(pic);

//pic.src = "/Users/rimjhimkhanna/NIET-NCET/Day5 /smile.jpeg";

let b1 = document.getElementsByTagName("button")[0];
console.log(b1);
let b2 = document.getElementsByTagName("button")[1];
console.log(b2);

b1.addEventListener("click", function() {
    pic.src = "happy.jpeg";
});
b2.addEventListener("click", function() {
    pic.src = "sad.jpeg";
});



const college = ("NIET")
console.log(`I am studing in ${college}`);