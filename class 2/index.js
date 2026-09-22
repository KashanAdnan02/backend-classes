// const http = require("http")


// const server = http.createServer((request, response) => {
//     if (request.url == "/" && request.method === "GET") {
//         response.end("Hello World")
//     }
//     if (request.url == "/products" && request.method === "GET") {
//         response.end("Products Data")
//     }
// })


// server.listen(8080, () => {
//     console.log("Server is running!")
// })




const express = require("express")


const app = express()


app.get("/", (req, res) => {
    console.log(req)
    res.send("HEllo from express backend")
})


app.listen(7000, () => {
    console.log("Server is running!")
})