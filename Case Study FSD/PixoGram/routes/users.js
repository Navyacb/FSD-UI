var express = require('express');
var router = express.Router();
var uploader = require("../utility/uploader");
var passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var fs = require('fs');
const {user, validate} = require('../models/users');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
res.render('login', {data:{ titleView: 'Login Page'}});

});

router.get('/register', function(req, res, next) {
  res.render('register', {data:{ titleView: 'Register'}});
});


router.get('/updateUser', async function(req, res, next) {
  console.log("after authorized");
  let user = await user.findById({_id:'5f8976531c9e70234003a28a'});
  console.log('Display user with ID'+ user);
  res.render('editprofile', {data:{ titleView: 'Update Profile Page',user: user}});
});


router.post('/add-user',uploader.single('profilePicture'), async (req, res) => {
  console.log("inside post method");
  let passwd='';
  console.log(req.body.passwd);
    bcrypt.hash(req.body.passwrd, saltRounds, function(err, hash) {

        passwrd = hash;
      console.log(passwrd);
      let user = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        username: req.body.userName,
        emailid: req.body.email,
        password: passwrd,

        profilepic: {
          imgdata: new Buffer.from(fs.readFileSync(req.file.path), 'base64'),
          contentType: req.file.mimetype
        }

      };

      user.create(user, (err, item) => {
        if (err) {

          console.log(err);
          res.render('index', { data:{ titleView: 'Welcome Page'}, data: { user } });
        }
        else {

          res.render('index', { data:{ titleView: 'Welcome Page'}, data: { user } });

        }});


    });

});


router.post('/login', async function(req, res, next) {
  let loginid= req.body.loginId;
  let passwd = req.body.passwd;
  user.findOne({ username: loginid }, function (err, user) {
    if (!!user) {
      bcrypt.compare(passwd, user.password, function(err1, result) {
        if(!!result) {
          let resstr="";
          resstr=require(__dirname + '/../utility/token')( user , resstr);
          res.render('index', {data:{ titleView: 'Welcome Page',user: user, token: resstr}});

        }
        else {
          res.render('login', {data:{ titleView: 'User Login Page',errormsg:'Invalid credentials'}});

        }
    });
    } else
      res.render('login', {data:{ titleView: 'User Login Page',errormsg:'Invalid credentials'}});

  });
});

router.put('/update-user', async (req, res) => {

  const user = await user.findByIdAndUpdate(req.params.id,
      {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        emailid: req.body.email,
        profilepicture: req.body.profilePicture,

      }, { new: true });
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
  res.redirect('/');
});


module.exports = router;
