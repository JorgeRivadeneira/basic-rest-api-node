const express = require('express');

const router = express.Router();
const restController = require('../controllers/restController');

router.get('/', restController.getHome);

router.post('/',  restController.postHome);

module.exports = router;