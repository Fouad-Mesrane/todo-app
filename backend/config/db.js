import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.DB_URI}/todos`).then(()=> {
            console.log("DB Connected")
        })
        
    } catch (error) {
        console.log("DB FAILED TO CONNECT")
    }
}

export default connectDB