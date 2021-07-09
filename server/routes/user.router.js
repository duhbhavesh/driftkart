const express = require('express');
const { getUsers } = require('../controllers/user.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');

const router = express.Router();

router.get('/users', handleAuthVerify, getUsers);

module.exports = router;
