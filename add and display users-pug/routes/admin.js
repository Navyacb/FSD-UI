const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const users=[];
router.get('/add-users', (req, res, next) => {
  res.render('add-users',{pageTitle: 'add-users'});
});

router.post('/add-users', (req, res, next) => {
  users.push({title:req.body.title});
  res.redirect('/');
});

module.exports.routes = router;
module.exports.users = users;