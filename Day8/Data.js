// fetch  & promise + api

// promies is denotes something that willl happend in future
// pending state
// success/ failure
// then / catch

let p = new Promise((reject)=>{
    reject("Failure i am not good")
})
p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
console.log(p)

let myCal = new Promise((resolve, reject)=>{
    let num = 3+2
    if(num == 5){
        resolve("success") //.then
    } else{
        reject("failure") //.catch
    }
})
myCal
.then((message)=>{
    console.log("Good news", message)
}).catch((erroe)=>{
    console.log("Oh no",error)
})

 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(data => {
    document.getElementsByTagName('h2')[0].textContent += data[0].name
    document.getElementsByTagName('h2')[1].textContent += data[0].email

    //console.log(data[1].name)
})
