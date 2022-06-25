import express from 'express'
import config from 'config'
import { mainRouter } from '../routes/index'

const port = config.get('port')
const app = express()

app.use(express.json())

app.use('/api/v1/main', mainRouter)

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})