const router = require('express').Router()

const peopleController = require('../controllers/peopleController')

router.post('/', peopleController.create)

router.get('/', peopleController.index)

router.get('/:id', peopleController.show)

router.patch('/:id', peopleController.update)

router.delete('/:id', peopleController.delete)

module.exports = router
