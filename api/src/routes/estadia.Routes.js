const router = require('express').Router()
const ctrl = require('../controllers/estadia.Controllers')

router.get('/', ctrl.index)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router