const express= require("express")
const connection = require("./mongodb/config")
const dotenv= require("dotenv")
const router = require("./router/authrouter")
const cors = require("cors")
const app=express()

dotenv.config()

connection()

app.use(cors({
  origin:process.env.CLIENT_URL
}))
app.use(express.json())
app.use("/Beatflow",router)
app.use("/uploads", express.static("uploads"));


// app.listen(process.env.port,console.log("working"))
const PORT = process.env.PORT || 5999;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});