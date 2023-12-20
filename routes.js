const express = require('express')
const router = express.Router()
const testController = require('./Controllers/testController.js') 
const wordsController = require('./Controllers/wordsController.js')

router.get('/', testController.home)
router.post('/submit', testController.submit)
router.get('/addWord', wordsController.home)
router.post('/delete', wordsController.delete)
router.post('/addWordTable', wordsController.add)
// router.post('/checkItem', shoppingController.checkItem)
// router.post('/addItem', shoppingController.addItem)
// router.post('/delItem', shoppingController.delItem)

module.exports = router;	