import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js"
import campsiteRouter from "./routes/campsites.js"
import userRouter from "./routes/users.js"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected!!!")
      } catch (error) {
        throw error
      }

}

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected")
})


//middleeares
app.use(express.json())

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/campsites", campsiteRouter);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMsg = err.message || "something went wrong"
  return res.status(500).json(({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack
  }))
})

app.listen(8800, () => {
    connect()
    console.log("connected to the backend")
})