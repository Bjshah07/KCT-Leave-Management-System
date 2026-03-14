import express from 'express';
import connectDB from './Database/db.js';
import 'dotenv/config'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

app.get("/", (req, res) => {
    return res.end("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})  