const express= require("express")
const connection = require("./mongodb/config")
const dotenv= require("dotenv")
const router = require("./router/authrouter")
const cors = require("cors")
const app=express()

dotenv.config()

connection()

app.use(cors())
app.use(express.json())
app.use("/authentication",router)
app.use("/uploads", express.static("uploads"));


app.listen(process.env.port,console.log("working"))