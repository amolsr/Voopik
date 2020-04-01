var express = require('express');
const {
  query
} = require('express-validator');
var router = express.Router();
const indexController = require('../controller/indexController')
const cityController = require('../controller/cityController')
const utilController = require('../controller/utilController')


/* GET home page. */
router.get('/', indexController.defaultPage);
router.get('/suggestions', [
  query('q').exists(),
], utilController.validateRequest, cityController.getCity);

module.exports = router;