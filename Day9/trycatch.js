const college = null

console.log(college)
try {
    console.log(college.length)

}catch(error){
    console.log(error.message)
}

console.log("This is very Important code")

// async await

async function greetMe(name) {
    const message = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
              if(name){
            resolve("Good Morning " + name)
        } else {
            reject("No name Passed")
        }

        },5000)
      
    })
    console.log(message)
}
greetMe("Noida")

// syntax
// setTimeout(()=>{

// },3000)

// if(){

// }else{

// }

// function f_name(){

// }

// const ff=()=>{

// }

// new Promise((res,rej)=>{
//     res == then
//     rej == catch
// })

// try {

// } catch(){

// }

console.log("start")  // 1


setTimeout(()=>{
    console.log("Timeout") // 4
})


console.log("end")  // 2


Promise.resolve()
    .then(()=>{
        console.log("Promise") // 3
    })