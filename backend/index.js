require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()


//Middle ware
// app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// route
app.use('/workouts',workoutRoutes)
app.use('/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Access granted"))
.catch(err=>console.log(err))


app.listen(process.env.PORT,()=>console.log("Server running at port ", process.env.PORT))