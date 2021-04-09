const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users.controller');

router.get('/', usersCtrl.getUsers)
router.get('/:userId', usersCtrl.getUser)
router.post('/', usersCtrl.createUser)
router.put('/:userId', usersCtrl.updateUser)
router.delete('/:userId', usersCtrl.deleteUser)

module.exports = router;