const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose=require("mongoose");
const app = express();
const port=3000;

app.set('view engine',html)

//app.use('/static',express.static('static'))
app.get("/",function(req,res){
    res.sendFile(__dirname+'/login.html');
})

/*app.get("/dashboard",function(req,res) {
    res.sendfile("dashboard.html");
})*/

//routes 
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.get("/student.html",function(req,res){
    res.sendFile(__dirname+'/student.html');
})
app.get("/login",function(req,res){
    res.sendFile(__dirname+'/login.html');
})
app.get("/dashboard",function(req,res){
    res.sendFile(__dirname+'/dashboard.html');
})


app.listen(port,()=>{
    console.log(`this is working on port ${port}`);
})
