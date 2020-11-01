var express = require('express');
var router = express.Router();
router.get('/search', function(req, res, next) {
    res.render('search', { data:{ titleView: 'Search Page',user: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

router.get('/newsfeed', function(req, res, next) {
    res.render('newsfeed', { data:{ titleView: 'NewsFeed Page',user: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});
router.get('/update', function(req, res, next) {
    res.render('editprofile', { data:{ titleView: 'Update Profile Page',user: { _id:'5f90047c447128608075a32d' },isAccount:true} });
});

module.exports = router;