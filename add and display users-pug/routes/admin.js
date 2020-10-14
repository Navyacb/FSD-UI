const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const products=[];
router.get('/add-user', (req, res, next) => {
  res.render('add-user',{pageTitle: 'Add User',activeAddUser: true});
});

router.post('/add-user', (req, res, next) => {
  products.push({title:req.body.title})
  res.redirect('/');
});

module.exports.router = router;
module.exports.products = products;
