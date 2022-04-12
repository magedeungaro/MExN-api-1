require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' })
})

mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(3000)
  })
  .catch(err => console.log(err))
