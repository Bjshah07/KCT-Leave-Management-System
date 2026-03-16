import express from 'express';
import connectDB from './Database/db.js';   
import 'dotenv/config'
import cors from 'cors'
import userRouter from './Routes/user.route.js';

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000  // Middleware

app.use(cors())  // Enable CORS for all routes
app.use(express.json())  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }))  // Parse URL-encoded bodies

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

app.use("/", userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})  