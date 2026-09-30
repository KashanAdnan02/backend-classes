const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 4000;

app.use(express.json())

async function connectDB() {
    try {
        // console.log("Inside Func")
        await mongoose.connect("mongodb+srv://fullstackdevkashan_db_user:6Bfat86XRM5JSQ8j@cluster0.z6ahccd.mongodb.net/?appName=Cluster0")
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

app.post("/add-user", async (req, res) => {
    console.log(req.body)
    const user = await userModel.create(req.body) // Data Saves in the mongodb
    res.send("User Created Successfully!")
})

app.get("/", async (req, res) => {
    const data = await userModel.findById("6abbe17dd2f4477f608f9e39") // Get All Data
    res.send(data)
})

app.put("/update", async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({ _id: req.body.id }, {
        name: req.body.name,
        email: req.body.email
    })

    res.send("User Updated Successfully!")
})

app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT)
})