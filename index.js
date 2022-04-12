//initial config
const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

//settings to read JSON - middleware
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

//api endpoints
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// initial endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' })
})



// port
//stablish db connection
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(3000)
  })
  .catch(err => console.log(err))
