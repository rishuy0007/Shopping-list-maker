const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine" , "ejs");
var itemarr= [];
app.get("/" , function(req , res){
     res.render("index" , {items: itemarr})
})

app.post("/" , function(req , res){
     var item = req.body.addItem;

     itemarr.push(item);
     res.redirect("/");
})

app.listen(3000 , function(){
    console.log("server2 is on at");
})
