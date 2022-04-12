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
  }
  catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) return res.status(422).json({ message: 'user not found' })

    res.status(200).json(person)
  }
  catch (error) {
    res.status(500).json({ error })
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, salary, approved } = req.body
  const person = {
    name,
    salary,
    approved
  }
  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person)

    if (updatedPerson.matchedCount === 0) return res.status(422).json({ message: 'user not found' })

    res.status(200).json(person)
  }
  catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) return res.status(422).json({ message: 'user not found' })

    await Person.deleteOne({ _id: id })
    res.status(200).json({ message: 'User successfully deleted' })
  }
  catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
