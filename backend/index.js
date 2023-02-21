const express = require("express")
const path = require("path")
const expressEdge = require("express-edge")
const app = express()

app.use(expressEdge.engine)
app.set("views", `${__dirname}/views`)

app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/login", (req, res) =>{
    res.render("login")
})

app.listen(3000, () => console.log("hi"))