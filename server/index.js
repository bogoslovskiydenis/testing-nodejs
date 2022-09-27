import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

//Middlware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: 'all is fine'})
})

//Routes
app.use('/api/auth', authRoute)

async function startDb() {
    try {
        await mongoose.connect(process.env.MONO_DB)
        app.listen(process.env.PORT , () => console.log('server start'))
    } catch (e) {
        console.log(e)
    }
}

startDb()

