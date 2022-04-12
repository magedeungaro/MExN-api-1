//initial config
const express = require('express')
const app = express()

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

// port
app.listen(3000)
