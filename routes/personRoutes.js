const router  = require('express').Router()
//models
const Person = require('../models/Person')

//only what comes after /person
router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  try {
    // same as Person.all in RoR/Active record
    const people = await Person.find()
    res.status(200).json(people)
  } catch (error) {

  }
})

module.exports = router
