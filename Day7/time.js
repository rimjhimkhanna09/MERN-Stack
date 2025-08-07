//console.log(Date())
const now = new Date
console.log(now)
console.log(now.getMinutes()) // 60 min = 1hr
//console.log(now.getMonth())
//console.log(now.getTime())
console.log(now.getSeconds()) // 60 sec = 1min
console.log(now.getHours()) // 24

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

console.log(`The current time is ${h}:${m}:${s}`)

function updateClock(){
    const time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    const timeNow = `${h}:${m}:${s}`
    document.getElementById('time').textContent = timeNow
}
setInterval(updateClock,1000)
updateClock() //loads immediately 

//ternary ? 
const age = 15
let statement = age < 18 ? "hi child":"hi uncle"
console.log(age)
console.log(statement)

for(var i=1;i<5;i++){
    setTimeout(()=>{
        console.log("number",i) // 1 2 3 4 with let 
        // var 4 4 4 4 

    },1000)
}