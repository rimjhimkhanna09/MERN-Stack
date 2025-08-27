const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5005


mongoose.connect('mongodb://127.0.0.1:27017/nietNioda')

const student = mongoose.model('student', { 
    name: String ,
    grade : {type : String, required : true},
    mark : Number
 });
//const abcd = new student({name : 'Rimjhim'})
//abcd.save().then(() => console.log('student added'))

app.get("/students",(req,res)=>{
    student.find()
    .then(data => res.send(data) )
    //res.send("This is home page !!...")
})

app.post("/students", async(req,res)=>{
    const ss = new student(req.body)
    await ss.save()
    .then(data => res.send(data))
})

app.get("/",(req,res)=>{
    res.send("Welcome to my app !! ")
})

app.get("/home",(req,res)=>{
    res.send("This is home page !!...")
})
app.get("/contact",(req,res)=>{
    res.send("This is contact page !!...")
})

app.listen(port,()=>{
    console.log(`The app is up on ${port}`)
})