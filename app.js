import express from 'express'
import movies from './movies.json' assert { type: 'json' }
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.disable('x-powered-by') // To hide the Technology Stack

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/movies', (req, res) => {
  res.json(movies)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
console.log('PORT:', process.env.PORT)
