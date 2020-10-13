const path = require('path');
const adminRoutes=require('./admin')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('users.js',adminRoutes.products);
  const products=adminRoutes.products;;
  res.render('users',{prods:products,pageTitle: 'users'});
});

module.exports = router;