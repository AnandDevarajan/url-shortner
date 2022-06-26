import express from 'express'
import config from 'config'
import dbConnect from "../config/db"
import { mainRouter } from './routes/routes'
import cors from "cors"
import 'dotenv/config'

const port = config.get('port')
const app = express()
dbConnect()

app.use(express.json())
app.use(cors({
    origin: config.get("corsOrigin")
}))

app.use('/api/v1/main', mainRouter)

app.listen(port, async () => {
    console.log(`App running on http://localhost:${port}`);

})