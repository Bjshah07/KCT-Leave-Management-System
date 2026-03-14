import express from 'express';

const app=express()
const PORT=process.env.PORT || 5000

app.get("/",(req,res)=>{
    return  res.end("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})  