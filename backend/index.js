const express = require("express")
const path = require("path")
const app = express()

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "pages", "index.html"))
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname, "pages", "about")
})

app.listen(3000, () => console.log("hi"))