import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js";
const app = express()


// connect to

app.use(cors())
app.use(express.json())

app.get("/", (req,res) => {
    res.send("API Running")
})
























app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server Running on PORT:`, process.env.PORT)
})