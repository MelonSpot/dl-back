const express = require("express")
const app = express()
const port = process.env.PORT || 9000

// initial routing
app.get("/", (req, res) => {
    res.type("text/plain")
    res.type("Melonspot home")
})

// 400
app.use((req, res) => {
    res.type("text/plain")
    res.status(404)
    res.send("404 - Not found")
})

// 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type("text/plain")
    res.status(500)
    res.send("500 - Server Error")
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}`
))