const express = require("express");
const bcrypt = require("bcrypt");
const userController = require('../controller/user.controller');
const router = express.Router();

router.get('/login', userController.userLogin);

module.exports = router;
