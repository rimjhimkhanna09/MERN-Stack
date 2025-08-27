const express = require('express')
const app = express()
const port = 5001

app.get("/",(req,res)=>{
    res.send("Welcome to my app !! ")
})
app.get("/feedback",(req,res)=>{
    res.send("This is feedback page !!...")
})

app.listen(port,()=>{
    console.log(`The app is up on ${port}`)
})