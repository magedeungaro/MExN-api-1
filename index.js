//initial config
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//models
const Person = require('./models/Person')

require('dotenv').config()

//settings to read JSON - middleware
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// initial endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' })
})

//api routes
app.post('/person', async (req, res) => {
  const { name, salary, approved } = req.body

  if (!name) return res.status(422).json({ error: 'name is necessary' })

  const person = {
    name,
    salary,
    approved
  }

  try {
    await Person.create(person)
    res.status(201).json({ message: 'Person successfully created' })
  }
  catch (error) {
    res.status(500).json({ error })
  }
})

// port
//stablish db connection
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(3000)
  })
  .catch(err => console.log(err))
