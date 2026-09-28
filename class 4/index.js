const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())


const PORT = 3000
async function connectDB() {
    try {
        await mongoose.connect("")
        console.log("Mongodb connection successfully!")
    } catch (error) {
        console.log(error)
    }
}
connectDB()

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model("User", userSchema)

app.post("/add-product", async (req, res) => {
    console.log(req.body)
    const user = await userModel.create(req.body) // Data Saves in the mongodb
    res.send("User Created Successfully!")
})


app.listen(PORT, () => {
    console.log('Server is running!')
})