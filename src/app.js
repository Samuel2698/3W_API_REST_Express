import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { seinenRouter } from './routes/seinen.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/seinen', seinenRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
