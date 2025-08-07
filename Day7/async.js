console.log("Good Morning")
setTimeout(()=>{
    console.log("Good Night")
},3000)

const x = setInterval(()=>{
    console.log("Tea Time")
},2000
)
setTimeout(()=>{
    console.log("No more tea")
    clearInterval(x)

},10000
)

console.log("Good Evening")