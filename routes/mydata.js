var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/mydata', function(req, res, next) {
  res.render('mydata', { title: 'Nicholas Taylor' });
});

module.exports = router;
