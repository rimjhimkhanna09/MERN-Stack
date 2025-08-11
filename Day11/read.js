const fs = require("fs")
console.log("good morning")

setTimeout(() =>{
    console.log("good night")
},1000)

const data = fs.readFileSync('hii.txt', 'utf-8') 
console.log(data)


// async function readData() {
//     try{
//     const info = await fs.readFile('hii.txt','utf-8')
//     console.log(info)
//     }catch(err){
//         console.error("Error reading file",err)
//     }
    
// }
// fs.readFile('hii.txt','utf8',(err,data)=>{
//     if(err){
//         console.error("Error reading file",err)
//         return
//     }
//     console.log(data)
// })
