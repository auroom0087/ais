var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API BLOCK //

router.get('/api/auth/' + auth_id, function(req,res) {
  var auth_id = new Date()
  res.send('Hello world!')
})







//************//

module.exports = router;
