const cors = require('cors');
var express = require('express');
var router = express.Router();
router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
