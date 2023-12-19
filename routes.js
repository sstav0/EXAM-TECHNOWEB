const express = require('express')
const router = express.Router()
//const shoppingController = require('./Controllers/renameController.js') => RENAME CONTROLLER

router.get('/', shoppingController.home)
// router.post('/checkItem', shoppingController.checkItem)
// router.post('/addItem', shoppingController.addItem)
// router.post('/delItem', shoppingController.delItem)

module.exports = router;	