const router = require('express').Router()
const {userController} = require('../controllers')
const {auth} = require('../middleware')

router.get('/infor', auth, userController.getUserInfor)

router.patch('/update', auth, userController.updateUser)


module.exports = router