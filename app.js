const express = require("express");
const app = express();
const port = 80;

app.get("/",(req,res)=>{
    res.send("index is good");
});


app.get("/about",(req,res) =>{
    res.render("about");
})

app.get("*",(req,res)=>{
    res.send("not found");
});

app.listen(port,() =>{
    console.log("server is running on "+ port +"");
});

