const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData=require('../routes/admin')
const router = express.Router();

router.get('/home', (req, res, next) => {
  res.render('home',{pageTitle: 'home',activeShop:true})
});

module.exports = router;