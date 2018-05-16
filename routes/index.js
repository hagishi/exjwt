var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  const token = jwt.sign({ user: 'fuji', id: 1 }, 'hello', {
    expiresIn: '24h'
  });
  res.json({
    token: token
  });
});

router.get('/test', function(req, res, next) {
  const le =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZnVqaSIsImlkIjoxLCJpYXQiOjE1MjY0MzIxODEsImV4cCI6MTUyNjUxODU4MX0.90qFS_mtantdBd7GynNFgoekA4wJrF4banpCk_nY-jE';
  const s = jwt.verify(le, 'hello');
});

router.get('/hello', async (req, res) => {
  res.json({
    world: 'fuji'
  });
});

module.exports = router;
