const express = require("express")
const app = express()


app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/photo", (req, res) => {
    res.sendFile(__dirname + "/views/photo.html")
})


app.listen(3000, () => {
    console.log("listening on post 3000")
})