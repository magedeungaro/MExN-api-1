const mongoose = require('mongoose')

//Persons table
const Person = mongoose.model('Person', {
  name: String,
  salary: Number,
  approved: Boolean
})

module.exports = Person
