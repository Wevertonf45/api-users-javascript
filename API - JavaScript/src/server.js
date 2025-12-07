import express from 'express'
import router from './routes.js'
import dotenv from 'dotenv'


dotenv.config()


const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
app.use('/', router)