const path = require('path');
const express = require('express');
const router = express.Router();
let rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
//res.sendFile(path.join(__dirname, '../','views','add-product.html'));
res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;